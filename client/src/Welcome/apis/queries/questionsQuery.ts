import { supabase } from '../../../global'

export const questionsQuery = async () => {
  const { data: courses } = await supabase.from('questions').select('*')

  return courses
}
