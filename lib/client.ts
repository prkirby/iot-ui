import Axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const baseURL = publicRuntimeConfig.bffServer
const axios = Axios.create({
  baseURL,
})

async function publish(topic: string, message: string) {
  try {
    const response = await axios.post('/publish', { topic, message })
    return response.data
  } catch (error) {
    console.error('Publish error: ', error)
  }
}

export default publish
