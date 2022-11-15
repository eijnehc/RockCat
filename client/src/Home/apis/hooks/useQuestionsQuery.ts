import { useQuery, UseQueryResult } from 'react-query'

import { QuestionsOverview } from '../../interfaces'
import { questionsQuery } from '../queries'

export const useQuestionsQuery = (questionId?: number) => {
  const {
    data: questions,
    refetch,
    isLoading,
    error,
  }: UseQueryResult<QuestionsOverview> = useQuery([questionId], () => questionsQuery(questionId))

  return { questions, refetch, isLoading, error }
}
