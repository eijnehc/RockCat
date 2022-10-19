import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import { useProfileQuery } from '../apis/hooks'

import { HomeView } from './HomeView'

export const HomeContainer: FC = () => {
  const { profile } = useProfileQuery()
  const navigate = useNavigate()

  if (!profile) {
    navigate('/')
  }

  return <HomeView />
}

HomeContainer.displayName = 'HomeContainer'
