import { supabase } from '../../../global'

export const profileQuery = async () => {
  const profileData = await supabase.auth.getUser()

  return profileData
}
