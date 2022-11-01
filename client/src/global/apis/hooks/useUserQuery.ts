import { useQuery, UseQueryResult } from 'react-query'

import { User } from '../../interfaces'
import { userQuery } from '../queries'

export const useUserQuery = () => {
  const { data, isLoading, error, refetch }: UseQueryResult<User> = useQuery(['userQuery'], () => userQuery())

  return { user: data, refetch, isLoading, error }
}
