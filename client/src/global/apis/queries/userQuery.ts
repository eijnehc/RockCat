import { apiRoutes } from '../../../apiRoutes'
import { User } from '../../interfaces'
import { authFetch } from '../../utils'

export const userQuery = async (): Promise<User> => {
  const res = await authFetch(apiRoutes.userHttpUrl)

  return res.json()
}
