import { FC, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useSearchParams } from 'react-router-dom'

import { WelcomeView } from './WelcomeView'

export const WelcomeContainer: FC = () => {
  const [searchParams] = useSearchParams()
  const cancelled = searchParams.get('cancelled')

  useEffect(() => {
    if (cancelled) {
      toast.error('Order cancelled')
    }
  }, [cancelled])

  return (
    <>
      <Toaster />
      <WelcomeView />
    </>
  )
}

WelcomeContainer.displayName = 'WelcomeContainer'
