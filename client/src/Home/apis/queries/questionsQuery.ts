import { apiRoutes } from '../../../apiRoutes'
import { QuestionsOverview } from '../../interfaces'

export const questionsQuery = async (questionId?: number): Promise<QuestionsOverview> => {
  const query = questionId ? `?id=${questionId}` : ''
  const res = await fetch(apiRoutes.questionsHttpUrl(query))

  return res.json()
}
