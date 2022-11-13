import { apiRoutes } from '../../../apiRoutes'
import { authFetch } from '../../../global'

export const completeQuestionQuery = async (questionId: string) => {
  const res = await authFetch(apiRoutes.completeQuestionHttpUrl, {
    method: 'POST',
    body: JSON.stringify({ questionId: questionId }),
  })

  return res.json()
}
