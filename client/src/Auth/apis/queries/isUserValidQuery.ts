import { supabase } from '../../../global'

export const isUserValidQuery = async (email: string) => {
  const { data } = await supabase.from('profile').select('*').eq('email', email).limit(1)

  if (data && data.length > 0) {
    return true
  }

  return false
}
