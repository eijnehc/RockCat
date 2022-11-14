import { FC, FormEvent, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import { useUserQuery } from '../../global'
import { useUpdateAvatarQuery, useUpdateUserQuery } from '../apis'

import { ProfileView } from './ProfileView'

export const ProfileContainer: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isLoading, error, refetch } = useUserQuery()
  const { mutate: mutateUser, isSuccess: isUserSuccess } = useUpdateUserQuery()
  const { mutate: mutateAvatar, isSuccess: isAvatarSuccess } = useUpdateAvatarQuery()

  useEffect(() => {
    if (isUserSuccess || isAvatarSuccess) {
      refetch()
      toast.success('Profile Updated')
    }
  }, [isUserSuccess, isAvatarSuccess])

  if (isLoading || error || !user) {
    return null
  }

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleUpdateAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.')
      }
      const file = event.target.files[0]
      const formData = new FormData()
      formData.append('file', file, file.name)
      formData.append('id', user.id)

      mutateAvatar(formData)
    } catch (err) {
      console.error(err)
    }
  }

  const handleUpdateProfile = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const name = (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value
    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value

    mutateUser({
      ...user,
      name: name,
      email: email,
    })
    setIsOpen(false)
  }

  return (
    <>
      <Toaster />
      <ProfileView
        user={user}
        isOpen={isOpen}
        toggleModal={toggleModal}
        handleUpdateAvatar={handleUpdateAvatar}
        handleUpdateProfile={handleUpdateProfile}
      />
    </>
  )
}

ProfileContainer.displayName = 'ProfileContainer'
