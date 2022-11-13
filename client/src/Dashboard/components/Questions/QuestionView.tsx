import { FC } from 'react'
import styled from 'styled-components'

import { QuestionsOverview } from '../../../Home'

interface Props {
  question?: QuestionsOverview
  isLoading: boolean
}

export const QuestionView: FC<Props> = ({ question, isLoading }) => {
  return (
    <Wrapper>
      <Title>{question?.data[0].title}</Title>
      <Title>{question?.data[0].description}</Title>
      <Title>{question?.data[0].likes}</Title>
      <Title>{question?.data[0].answers}</Title>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-white);
  color: var(--color-black);
`

const Title = styled.div``

QuestionView.displayName = 'QuestionView'
