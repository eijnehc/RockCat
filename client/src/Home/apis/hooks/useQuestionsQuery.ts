import { useQuery, UseQueryResult } from 'react-query'

import { QuestionsOverview } from '../../interfaces'
import { questionsQuery } from '../queries'

export const useQuestionsQuery = () => {
  const {
    data: questions,
    isLoading,
    error,
  }: UseQueryResult<QuestionsOverview> = useQuery(['questionsQuery'], () => questionsQuery())

  return { questions, isLoading, error }
}
