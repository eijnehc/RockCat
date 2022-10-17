import React, { FC } from 'react'

import { supabase } from '../../global'

import { LoginView } from './LoginView'

export const LoginContainer: FC = () => {
  const handleGithubSignIn = () => {
    supabase.auth.signInWithOAuth({
      provider: 'github',
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log((e.currentTarget.elements.namedItem('email') as HTMLInputElement).value)
  }

  return <LoginView onGithubSignIn={handleGithubSignIn} onSubmit={handleSubmit} />
}

LoginContainer.displayName = 'LoginContainer'
