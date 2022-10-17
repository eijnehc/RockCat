import { apiRoutes } from '../../../apiRoutes'

export const orderSuccessQuery = async (sessionId: string) => {
  const res = await fetch(apiRoutes.orderSuccessHttpUrl(sessionId))

  return res.json()
}
