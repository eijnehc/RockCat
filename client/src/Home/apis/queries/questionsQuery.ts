import { supabase } from '../../../global'

export const questionsQuery = async () => {
  const { data: questions } = await supabase.from('questions').select('*')

  return questions
}
