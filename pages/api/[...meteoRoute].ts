import type { NextApiRequest, NextApiResponse } from 'next'
 
export const METEO_API_BASE_URL = 'https://api.meteo.lt/v1/';
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const route = req?.query?.meteoRoute?.join('/') 
  try {
    const response = await fetch(`${METEO_API_BASE_URL}${route}`)
    const json = await response.json()

    if (response.status >= 400) {
      res.status(response.status).json(json)
    }
    res.status(200).json(json)
  } catch {
    res.status(500).json({ message: 'Internal server error' })
  }
}
