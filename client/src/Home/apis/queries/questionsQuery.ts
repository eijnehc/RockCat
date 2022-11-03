import { apiRoutes } from '../../../apiRoutes'
import { authFetch } from '../../../global'
import { QuestionsOverview } from '../../interfaces'

export const questionsQuery = async (questionId?: number): Promise<QuestionsOverview> => {
  const query = questionId ? `?id=${questionId}` : ''
  const res = await authFetch(apiRoutes.questionsHttpUrl(query))

  return res.json()
}
