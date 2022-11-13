import { useMutation } from 'react-query'

import { completeQuestionQuery } from '../queries'

export const useCompleteQuestionQuery = () => {
  const { mutate, isSuccess } = useMutation(completeQuestionQuery, {
    onSuccess: (data) => {
      console.info(data)
    },
    onError: (err) => {
      console.error(err)
    },
  })

  return { mutate, isSuccess }
}
