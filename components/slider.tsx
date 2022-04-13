import { useTheme } from '@nextui-org/react'
import RCSlider from 'rc-slider'

type SliderProps = {
  min: number
  max: number
  defaultVal: number
  step: number
  onChangeFn: (val: number | number[]) => void
}

const Slider = ({ min, max, defaultVal, step, onChangeFn }: SliderProps) => {
  const { theme } = useTheme()
  const handleStyle = {
    width: 50,
    height: 50,
    marginTop: -19,
    backgroundColor: theme?.colors.primaryLight.value,
    borderColor: theme?.colors.primary.value,
  }

  const trackStyle = {
    height: 14,
    backgroundColor: theme?.colors.secondary.value,
  }

  const railStyle = {
    height: 14,
    backgroundColor: theme?.colors.accents2.value,
  }

  return (
    <RCSlider
      min={min}
      max={max}
      defaultValue={defaultVal}
      step={step}
      onChange={onChangeFn}
      handleStyle={handleStyle}
      trackStyle={trackStyle}
      railStyle={railStyle}
    />
  )
}

export default Slider
