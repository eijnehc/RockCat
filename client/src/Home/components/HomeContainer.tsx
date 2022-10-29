import { FC } from 'react'

import { useAuthAtom } from '../../global'
import { useQuestionsQuery } from '../apis/hooks'

import { HomeView } from './HomeView'

export const HomeContainer: FC = () => {
  const [auth] = useAuthAtom()
  const { questions } = useQuestionsQuery(auth?.access_token)

  return <HomeView questions={questions} />
}

HomeContainer.displayName = 'HomeContainer'
