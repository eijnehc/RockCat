import { apiRoutes } from '../../../apiRoutes'
import { authFetch } from '../../../global'

export const updateAvatarQuery = async (formData: FormData) => {
  const res = await authFetch(
    apiRoutes.updateAvatarHttpUrl,
    {
      method: 'POST',
      body: formData,
    },
    true
  )

  return res.json()
}
