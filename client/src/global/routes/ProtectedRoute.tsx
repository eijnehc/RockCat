import { useEffect, useState } from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

import { supabase } from '../utils'

export const ProtectedRoute = () => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState<any>(null)
  useEffect(() => {
    fetchProfile()
  }, [])

  async function fetchProfile() {
    const profileData = await supabase.auth.getUser()
    if (!profileData) {
      navigate('/welcome')
    } else {
      setProfile(profileData)
    }
  }
  console.log(profile)
  return profile ? <Outlet /> : <Navigate to='/welcome' />
}

ProtectedRoute.displayName = 'ProtectedRoute'

export default ProtectedRoute
