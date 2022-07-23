import { useState } from 'react'
import { Switch, Text, SwitchEvent, Spacer } from '@nextui-org/react'

import { publish } from '../lib/client'

type StatusSwitchProps = {
  topic: string
  defaultChecked: boolean
}

const StatusSwitch = ({ topic, defaultChecked }: StatusSwitchProps) => {
  const [status, setStatus] = useState(defaultChecked)

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
