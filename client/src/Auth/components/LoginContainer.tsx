import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { supabase } from '../../global'
import { signUpQuery } from '../apis'
import { isUserValidQuery } from '../apis/queries/isUserValidQuery'
import { signInQuery } from '../apis/queries/signInQuery'

import { LoginView } from './LoginView'

export const LoginContainer: FC = () => {
  const [isValidUser, setIsValidUser] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    const signUpUser = async (sessionId: string | null) => {
      if (sessionId) {
        const res = await signUpQuery(sessionId)
        if (res.ok) {
          console.info('Customer added')
        } else {
          console.error('Customer not added')
        }
      }
    }
    signUpUser(sessionId)
    navigate('/login')
  }, [!sessionId])

  useEffect(() => {
    signOut()
  }, [])

  async function signOut() {
    const profileData = await supabase.auth.getUser()
    if (profileData?.data?.user) {
      supabase.auth.signOut()
    }
  }

  const handleGithubSignIn = () => {
    supabase.auth.signInWithOAuth({
      provider: 'github',
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value
    const isUserValid = await isUserValidQuery(email)

    if (isUserValid) {
      const { error } = await signInQuery(email)
      if (error) {
        console.error({ error })
      } else {
        setIsSubmitted(true)
      }
    } else {
      setIsValidUser(false)
    }
    setIsLoading(false)
  }

  const handleBack = () => {
    setIsSubmitted(false)
    setIsValidUser(true)
  }

  return (
    <LoginView
      isValidUser={isValidUser}
      isLoading={isLoading}
      isSubmitted={isSubmitted}
      onGithubSignIn={handleGithubSignIn}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  )
}

LoginContainer.displayName = 'LoginContainer'
