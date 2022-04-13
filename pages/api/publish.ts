import type { NextApiRequest, NextApiResponse } from 'next'
import Axios from 'axios'

const axios = Axios.create({
  baseURL: process.env.BFF,
})

export type PublishBody = {
  topic: string
  message: string
}

async function publish(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = req.body
    const response = await axios.post('/publish', data)
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).end()
    console.error('Publish error: ', error)
  }
}

export default publish
