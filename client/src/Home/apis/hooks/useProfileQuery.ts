import { useQuery } from 'react-query'

import { profileQuery } from '../queries'

export const useProfileQuery = () => {
  const { data: profile, isLoading, error } = useQuery(['profileQuery'], () => profileQuery())

  return { profile, isLoading, error }
}
