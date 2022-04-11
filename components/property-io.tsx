import { useState } from 'react'
import Slider from 'rc-slider'
import { Input, Spacer } from '@nextui-org/react'
import { publish } from '../lib/client'

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
  function handleChange(val: number) {
    publish({
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
      <Slider
        min={min}
        max={max}
        defaultValue={defaultVal}
        step={step}
        onChange={(val) => {
          handleChange(val as number)
        }}
      />
    </>
  )
}

export default PropertyIO
