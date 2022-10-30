import React, { FC, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { signInQuery, signUpQuery } from '../apis'

import { LoginView } from './LoginView'

export const LoginContainer: FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const customerSuccess = searchParams.get('customer_added')
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
    if (sessionId) {
      signUpUser(sessionId)
      navigate('/login?customer_added=success')
    }
    navigate('/login')
  }, [!sessionId])

  useEffect(() => {
    if (customerSuccess) {
      toast.success('Customer profile created!')
    }
  }, [customerSuccess])

  useEffect(() => {
    signOut()
  }, [])

  async function signOut() {
    localStorage.clear()
  }

  const handleGithubSignIn = () => {
    console.log('sign in github from server')
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
    <>
      <Toaster />
      <LoginView
        isValidUser={isValidUser}
        isLoading={isLoading}
        isSubmitted={isSubmitted}
        onGithubSignIn={handleGithubSignIn}
        onSubmit={handleSubmit}
        onBack={handleBack}
      />
    </>
  )
}

LoginContainer.displayName = 'LoginContainer'
