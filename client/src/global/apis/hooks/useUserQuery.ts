import { useQuery, UseQueryResult } from 'react-query'

import { User } from '../../interfaces'
import { userQuery } from '../queries'

export const useUserQuery = () => {
  const { data, isLoading, error }: UseQueryResult<User> = useQuery(['userQuery'], () => userQuery())

  return { user: data, isLoading, error }
}
