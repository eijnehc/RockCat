import { useMutation } from 'react-query'

import { updateUserQuery } from '../queries'

export const useUpdateUserQuery = () => {
  const { mutate, isSuccess } = useMutation(updateUserQuery, {
    onSuccess: (data) => {
      console.info(data)
    },
    onError: (err) => {
      console.error(err)
    },
  })

  return { mutate, isSuccess }
}
