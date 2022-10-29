import { apiRoutes } from '../../../apiRoutes'
import { QuestionsOverview } from '../../interfaces'

export const questionsQuery = async (token?: string, questionId?: number): Promise<QuestionsOverview> => {
  const query = questionId ? `?id=${questionId}` : ''
  const res = await fetch(apiRoutes.questionsHttpUrl(query), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  return res.json()
}
