import { FC } from 'react'

import { useUserQuery } from '../../global/apis/hooks/useUserQuery'

import { ProfileView } from './ProfileVIew'

export const ProfileContainer: FC = () => {
  const { user, isLoading, error } = useUserQuery()

  if (isLoading || error || !user) {
    return null
  }

  const handleUpdateProfile = () => {
    console.log('test')
  }

  return <ProfileView user={user} handleUpdateProfile={handleUpdateProfile} />
}

ProfileContainer.displayName = 'ProfileContainer'
