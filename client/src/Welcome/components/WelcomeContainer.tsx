import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'

import { WelcomeView } from './WelcomeView'

export const WelcomeContainer: FC = () => {
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('cancelled')

  return <WelcomeView />
}

WelcomeContainer.displayName = 'WelcomeContainer'
