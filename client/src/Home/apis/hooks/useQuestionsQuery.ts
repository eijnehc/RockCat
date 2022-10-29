import { useQuery, UseQueryResult } from 'react-query'

import { QuestionsOverview } from '../../interfaces'
import { questionsQuery } from '../queries'

export const useQuestionsQuery = (token?: string, questionId?: number) => {
  const {
    data: questions,
    isLoading,
    error,
  }: UseQueryResult<QuestionsOverview> = useQuery(['questionsQuery'], () => questionsQuery(token, questionId))

  return { questions, isLoading, error }
}
