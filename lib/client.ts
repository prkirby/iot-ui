import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://pkirby-mac.local:3001',
})

export type PublishBody = {
  topic: string
  message: string
}

export async function publish(data: PublishBody) {
  try {
    const response = await axios.post('/publish', data)
    return response.data
  } catch (error) {
    console.error('Publish error: ', error)
  }
}
