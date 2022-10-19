import { apiRoutes } from '../../../apiRoutes'
import { StripeCustomer } from '../../interfaces'

export const orderSuccessQuery = async (sessionId: string): Promise<StripeCustomer> => {
  const res = await fetch(apiRoutes.orderSuccessHttpUrl(sessionId))

  return res.json()
}
