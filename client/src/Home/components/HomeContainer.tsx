import { FC } from 'react'

import { useQuestionsQuery } from '../apis/hooks'

import { HomeView } from './HomeView'

export const HomeContainer: FC = () => {
  const { questions } = useQuestionsQuery()

  return <HomeView questions={questions} />
}

HomeContainer.displayName = 'HomeContainer'
