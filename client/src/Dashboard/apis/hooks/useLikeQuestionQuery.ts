import { useMutation } from 'react-query'

import { likeQuestionQuery } from '../queries'

export const useLikeQuestionQuery = () => {
  const { mutate, isSuccess } = useMutation(likeQuestionQuery, {
    onSuccess: (data) => {
      console.info(data)
    },
    onError: (err) => {
      console.error(err)
    },
  })

  return { mutate, isSuccess }
}
