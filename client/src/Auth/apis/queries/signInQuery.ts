import { apiRoutes } from '../../../apiRoutes'

export const signInQuery = async (email: string) => {
  const res = await fetch(apiRoutes.signInHttpUrl(email))

  return res
}
