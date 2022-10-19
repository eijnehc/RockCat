import { FC } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useCoursesQuery } from '../apis'

import { WelcomeView } from './WelcomeView'

export const WelcomeContainer: FC = () => {
  const { courses } = useCoursesQuery()
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('cancelled')

  return <WelcomeView />
}

WelcomeContainer.displayName = 'WelcomeContainer'
