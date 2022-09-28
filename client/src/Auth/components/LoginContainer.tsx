import React, { FC } from 'react'

import { LoginView } from './LoginView'

export const LoginContainer: FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log((e.currentTarget.elements.namedItem('email') as HTMLInputElement).value)
  }

  return <LoginView onSubmit={handleSubmit} />
}

LoginContainer.displayName = 'LoginContainer'
