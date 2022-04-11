import { Text, Spacer } from '@nextui-org/react'
import PropertyIO, { PropertyIOProps } from './property-io'

type LightsControllerProps = {
  properties: Array<PropertyIOProps>
  title: string
}

const LightsController = ({ properties, title }: LightsControllerProps) => {
  function renderPropertyIOs() {
    return properties.map((property) => (
      <div key={property.topic}>
        <PropertyIO
          key={property.topic}
          min={property.min}
          max={property.max}
          defaultVal={property.defaultVal}
          step={property.step}
          topic={property.topic}
          label={property.label}
        />
        <Spacer y={2} />
      </div>
    ))
  }

  return (
    <div style={{ width: '100%' }}>
      <Text h3>{title}</Text>
      {renderPropertyIOs()}
    </div>
  )
}

export default LightsController
