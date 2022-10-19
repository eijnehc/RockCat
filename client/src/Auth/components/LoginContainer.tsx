import React, { FC, useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { supabase } from '../../global'
import { createNewUserQuery, orderSuccessQuery } from '../apis'
import { isUserValidQuery } from '../apis/queries/isUserValidQuery'
import { signInQuery } from '../apis/queries/signInQuery'

import { LoginView } from './LoginView'

export const LoginContainer: FC = () => {
  const [isValidUser, setIsValidUser] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(true)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    const fetchStripeCustomer = async (sessionId: string | null) => {
      if (sessionId) {
        const customer = await orderSuccessQuery(sessionId)
        await createNewUserQuery(customer, sessionId)
      }
    }
    fetchStripeCustomer(sessionId)
    navigate('/login')
  }, [!sessionId])

  const handleGithubSignIn = () => {
    supabase.auth.signInWithOAuth({
      provider: 'github',
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
  }

  const handleBack = () => {
    setIsSubmitted(false)
    setIsValidUser(true)
  }

  return (
    <LoginView
      isValidUser={isValidUser}
      isSubmitted={isSubmitted}
      onGithubSignIn={handleGithubSignIn}
      onSubmit={handleSubmit}
      onBack={handleBack}
    />
  )
}

LoginContainer.displayName = 'LoginContainer'
