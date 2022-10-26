import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { supabase } from '../../global'
import { useProfileQuery } from '../apis/hooks'

import { HomeView } from './HomeView'

export const HomeContainer: FC = () => {
  return <HomeView />
}

HomeContainer.displayName = 'HomeContainer'
