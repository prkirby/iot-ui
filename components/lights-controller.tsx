import { Text, Spacer } from '@nextui-org/react'
import PropertyIO, { PropertyIOProps } from './property-io'
import StatusSwitch from './status-switch'
import { getControllerState } from '../lib/client'
import { useAsync } from 'react-async-hook'

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
  function renderPropertyIOs(controllerState: any) {
    return properties.map((property) => (
      <div key={property.topic}>
        <PropertyIO
          key={property.topic}
          min={property.min}
          max={property.max}
          defaultVal={controllerState[property.id] ?? property.defaultVal}
          step={property.step}
          topic={property.topic}
          label={property.label}
          id={property.id}
        />
        <Spacer y={2} />
      </div>
    ))
  }

  const asyncControllerState = useAsync(async () => {
    const curControllerState = await getControllerState('sl-music')
    return curControllerState
  }, [])

  return (
    <div style={{ width: '100%' }}>
      {asyncControllerState.loading && <Text h3>Loading...</Text>}
      {asyncControllerState.error && (
        <Text h3>Error: {asyncControllerState.error.message}</Text>
      )}
      {asyncControllerState.result && (
        <>
          <Text h3>{title}</Text>
          <Spacer y={2} />
          <StatusSwitch
            topic={statusTopic}
            defaultChecked={asyncControllerState.result.status}
          />
          <Spacer y={2} />
          {renderPropertyIOs(asyncControllerState.result)}
        </>
      )}
    </div>
  )
}

export default LightsController
