import { useState } from 'react'
import Slider from './slider'
import { Input, Spacer } from '@nextui-org/react'
import axios from 'axios'

export type PropertyIOProps = {
  min: number
  max: number
  defaultVal: number
  step: number
  topic: string
  label: string
}

const PropertyIO = ({
  min,
  max,
  defaultVal,
  step,
  topic,
  label,
}: PropertyIOProps) => {
  const [val, setVal] = useState(defaultVal)
  async function handleChange(val: number) {
    await axios.post('/api/publish', {
      topic: topic,
      message: val.toString(),
    })
    setVal(val)
  }
  return (
    <>
      <Input
        type="number"
        min={min}
        max={max}
        label={label}
        value={val}
        onChange={(e) => {
          handleChange(parseInt(e.target.value))
        }}
      />
      <Spacer y={2} />
      <Slider
        min={min}
        max={max}
        defaultVal={defaultVal}
        step={step}
        onChangeFn={(val) => {
          handleChange(val as number)
        }}
      />
    </>
  )
}

export default PropertyIO
