import { apiRoutes } from '../../../apiRoutes'
import { authFetch } from '../../../global'
import { User } from '../../../global/interfaces'

export const updateUserQuery = async (user: User) => {
  const res = await authFetch(apiRoutes.updateUserHttpUrl, {
    method: 'POST',
    body: JSON.stringify(user),
  })

  return res.json()
}
