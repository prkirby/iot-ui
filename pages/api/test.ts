// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  hello: string
}

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await axios.get('http://localhost:3001')
  res.status(200).json(response.data)
}
