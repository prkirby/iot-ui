import { useState } from 'react'
import { Switch, Text, SwitchEvent, Spacer } from '@nextui-org/react'

import publish from '../lib/client'

type StatusSwitchProps = {
  topic: string
}

const StatusSwitch = ({ topic }: StatusSwitchProps) => {
  const [status, setStatus] = useState(true)

  return (
    <>
      <Text size="14">Off / On</Text>
      <Spacer y={1} />
      <Switch
        color="secondary"
        checked={status}
        size="lg"
        onChange={async (e: SwitchEvent) => {
          await publish(topic, e.target.checked ? '1' : '0')
          setStatus(e.target.checked)
        }}
      />
    </>
  )
}

export default StatusSwitch
