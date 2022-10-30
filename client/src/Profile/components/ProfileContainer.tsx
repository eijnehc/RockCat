import { FC, FormEvent, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import { useUserQuery } from '../../global'
import { useUpdateUserQuery } from '../apis'

import { ProfileView } from './ProfileView'

export const ProfileContainer: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user, isLoading, error, refetch } = useUserQuery()
  const { mutate, isSuccess } = useUpdateUserQuery()

  useEffect(() => {
    if (isSuccess) {
      refetch()
      toast.success('Profile Updated')
    }
  }, [isSuccess])

  if (isLoading || error || !user) {
    return null
  }

  const toggleModal = () => {
    setIsOpen(!isOpen)
  }

  const handleUpdateProfile = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const name = (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value
    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value

    mutate({
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
        handleUpdateProfile={handleUpdateProfile}
      />
    </>
  )
}

ProfileContainer.displayName = 'ProfileContainer'
