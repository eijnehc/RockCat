import { supabase } from '../../../global'

export const signInQuery = async (email: string) => {
  const { data, error } = await supabase.auth.signInWithOtp({ email: email })

  return { data, error }
}
