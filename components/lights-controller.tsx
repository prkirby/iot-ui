import { Text, Spacer } from '@nextui-org/react'
import PropertyIO, { PropertyIOProps } from './property-io'
import StatusSwitch from './status-switch'

type LightsControllerProps = {
  properties: Array<PropertyIOProps>
  statusTopic: string
  title: string
}

const LightsController = ({
  statusTopic,
  properties,
  title,
}: LightsControllerProps) => {
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
      <Spacer y={2} />
      <StatusSwitch topic={statusTopic} />
      <Spacer y={2} />
      {renderPropertyIOs()}
    </div>
  )
}

export default LightsController
