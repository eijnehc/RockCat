import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { supabase } from '../../global'

export const ProfileView: FC = () => {
  const navigate = useNavigate()

  const handleClick = async () => {
    await supabase.auth.signOut()
    navigate('/welcome')
  }

  return (
    <div>
      Profile
      <button onClick={handleClick}>Log Out from GitHub</button>
    </div>
  )
}

ProfileView.displayName = 'ProfileView'
