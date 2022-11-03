import { useMutation } from 'react-query'

import { updateAvatarQuery } from '../queries'

export const useUpdateAvatarQuery = () => {
  const { mutate, isSuccess } = useMutation(updateAvatarQuery, {
    onSuccess: (data) => {
      console.info(data)
    },
    onError: (err) => {
      console.error(err)
    },
  })

  return { mutate, isSuccess }
}
