import { useQuery } from 'react-query'

import { questionsQuery } from '../queries'

export const useQuestionsQuery = () => {
  const { data: questions, isLoading, error } = useQuery(['questionsQuery'], () => questionsQuery())

  return { questions, isLoading, error }
}
