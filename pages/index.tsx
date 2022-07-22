import type { NextPage } from 'next'
import Head from 'next/head'
import { Container, Text, Grid, Spacer } from '@nextui-org/react'
import 'rc-slider/assets/index.css'
import LightsController from '../components/lights-controller'
import { PropertyIOProps } from '../components/property-io'

const musicStatusTopic: string = 'lights/sl-music/status'
const musicProperties: Array<PropertyIOProps> = [
  {
    min: 1,
    max: 8,
    step: 1,
    defaultVal: 1,
    topic: 'lights/sl-music/mode',
    label: 'Mode',
  },
  {
    min: 0,
    max: 255,
    step: 1,
    defaultVal: 0,
    topic: 'lights/sl-music/minDim',
    label: 'Minimum Dim (0-255)',
  },
  {
    min: 0,
    max: 255,
    step: 1,
    defaultVal: 255,
    topic: 'lights/sl-music/maxDim',
    label: 'Maximum Dim (0-255)',
  },
  {
    min: 0,
    max: 10000,
    step: 25,
    defaultVal: 2000,
    topic: 'lights/sl-music/animTime',
    label: 'Animation Time (0-30000ms)',
  },
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>IOT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Text h1>Hello.</Text>
        <Spacer y={2} />
        <Grid.Container gap={4} justify="center">
          <Grid xs={12} md={6}>
            <LightsController
              title="Music Corner Lights"
              properties={musicProperties}
              statusTopic={musicStatusTopic}
            />
          </Grid>
        </Grid.Container>
      </Container>
    </>
  )
}

export default Home
