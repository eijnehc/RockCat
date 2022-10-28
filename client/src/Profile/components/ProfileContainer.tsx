import { FC, useEffect, useState } from 'react'

import { supabase } from '../../global'

import { ProfileView } from './ProfileVIew'

export interface Profile {
  data: {
    id: string
    created_at: string
    name: string
    email: string
  }[]
}

export const ProfileContainer: FC = () => {
  const [profile, setProfile] = useState<Profile>()

  useEffect(() => {
    fetchProfile()
  }, [])

  async function fetchProfile() {
    const profileData = await supabase
      .from('profile')
      .select('*')
      .eq('email', 'chen.jie.2012@vjc.sg')
      .limit(1)
    setProfile(profileData as Profile)
  }

  const handleUpdateProfile = () => {
    console.log('test')
  }

  if (!profile) return null

  return <ProfileView profile={profile} handleUpdateProfile={handleUpdateProfile} />
}

ProfileContainer.displayName = 'ProfileContainer'
