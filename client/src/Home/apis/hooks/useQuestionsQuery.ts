import { useQuery, UseQueryResult } from 'react-query'

import { Questions } from '../../interfaces'
import { questionsQuery } from '../queries'

export const useQuestionsQuery = () => {
  const {
    data: questions,
    isLoading,
    error,
  }: UseQueryResult<Questions[]> = useQuery(['questionsQuery'], () => questionsQuery())

  return { questions, isLoading, error }
}
