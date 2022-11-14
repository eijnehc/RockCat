import { apiRoutes } from '../../../apiRoutes'
import { authFetch } from '../../../global'

interface Props {
  questionId: string
  likes: number
}

export const likeQuestionQuery = async ({ questionId, likes }: Props) => {
  const res = await authFetch(apiRoutes.likeQuestionHttpUrl, {
    method: 'POST',
    body: JSON.stringify({ questionId, likes }),
  })

  return res.json()
}
