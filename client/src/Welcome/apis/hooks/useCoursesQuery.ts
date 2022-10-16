import { useQuery } from 'react-query'

import { coursesQuery } from '../queries'

export const useCoursesQuery = () => {
  const { data: courses, isLoading, error } = useQuery(['coursesQuery'], () => coursesQuery())

  return { courses, isLoading, error }
}
