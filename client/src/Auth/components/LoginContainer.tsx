import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { supabase } from '../../global'
import { signInQuery, signUpQuery } from '../apis'

import { LoginView } from './LoginView'

export const LoginContainer: FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [isValidUser, setIsValidUser] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
    localStorage.clear()
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

    try {
      const res = await signInQuery(email)
      if (res.ok) {
        console.info('Magic link sent!')
        setIsSubmitted(true)
      } else {
        setIsValidUser(false)
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
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
