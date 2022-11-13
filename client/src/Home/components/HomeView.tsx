import { FC } from 'react'
import { CheckCircle } from 'react-feather'
import styled from 'styled-components'

import { QuestionsOverview } from '../interfaces'

interface Props {
  questions?: QuestionsOverview
}

enum DIFFICULTY {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

const getColorDifficulty = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case DIFFICULTY.EASY:
      return 'var(--color-easy)'
    case DIFFICULTY.MEDIUM:
      return 'var(--color-warning)'
    case DIFFICULTY.HARD:
      return 'var(--color-danger)'
    default:
      null
  }
}

const difficultyLevel = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case DIFFICULTY.EASY:
      return '40%'
    case DIFFICULTY.MEDIUM:
      return '60%'
    case DIFFICULTY.HARD:
      return '80%'
    default:
      null
  }
}

export const HomeView: FC<Props> = ({ questions }) => {
  return (
    <QuestionsWrapper>
      <Header>Questions </Header>
      <QuestionsCard>
        {questions?.data.map((item) => (
          <QuestionsContent
            key={item.id}
            style={{
              background: `linear-gradient(to right, ${getColorDifficulty(
                item.difficulty
              )} 10%, var(--color-white) ${difficultyLevel(item.difficulty)}`,
            }}
          >
            <span>{item.title}</span>
            <RightSection>
              <span style={{ color: getColorDifficulty(item.difficulty) }}>{item.difficulty}</span>
              {item.is_completed ? <CheckCircle color='var(--color-success)' /> : <UncheckedCircle />}
            </RightSection>
          </QuestionsContent>
        ))}
      </QuestionsCard>
    </QuestionsWrapper>
  )
}

const QuestionsWrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  width: clamp(400px, 60%, 700px);
  max-width: 100%;
  padding: 64px 0px;
  font-weight: var(--font-weight-bold);
`

const Header = styled.header`
  font-size: 1.3rem;
  margin-bottom: 24px;
`

const QuestionsCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
  cursor: pointer;
`

const QuestionsContent = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  color: var(--color-offblack);
`

const RightSection = styled.span`
  display: flex;
  gap: 8px;
`

const UncheckedCircle = styled.span`
  display: inline-block;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: var(--color-gray-300);
`

HomeView.displayName = 'HomeView'
