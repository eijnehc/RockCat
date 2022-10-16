import { supabase } from '../../../global'

export const coursesQuery = async () => {
  const { data: courses } = await supabase.from('courses').select('*')

  return courses
}
