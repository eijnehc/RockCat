import { FC } from 'react'
import { Home, Key } from 'react-feather'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Tooltip } from '../../../global'
import { QuestionsOverview } from '../../../Home'

interface Props {
  question?: QuestionsOverview
  isLoading: boolean
  handlePagination: (cursor: string) => void
}

export const QuestionView: FC<Props> = ({ question, isLoading, handlePagination }) => {
  return (
    <Wrapper>
      {isLoading ? null : (
        <>
          <Header>
            <BackButton to='/'>
              <Home size={32} />
            </BackButton>
            <Title>{question?.data[0].title}</Title>
            <Tooltip text='answer'>
              <Key />
            </Tooltip>
          </Header>
          <div>{question?.data[0].description}</div>
        </>
      )}
      <PaginationWrapper>
        <Button disabled={!question?.pagination?.prev} onClick={() => handlePagination('prev')}>
          Previous
        </Button>
        <Button disabled={!question?.pagination?.next} onClick={() => handlePagination('next')}>
          Next
        </Button>
      </PaginationWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: fit-content;
  width: clamp(300px, 50%, 500px);
  max-width: 100%;
  border-radius: 1rem;
  padding: 1rem;
  background-color: var(--color-white);
  color: var(--color-black);
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const BackButton = styled(Link)`
  color: var(--color-gray-700);
  font-size: 1.3rem;

  svg {
    display: inline-block;
  }

  :hover {
    color: var(--color-black);
    text-decoration: underline;
  }
`

const Title = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-weight: var(--font-weight-bold);
`

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const Button = styled.button`
  color: var(--color-white);
  background-color: var(--color-gray-700);
  border-radius: 1rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.5rem 2rem;
  font-weight: 700;
  opacity: 0.6;

  &:hover {
    opacity: 1;
  }

  :disabled {
    opacity: 0.6;
    cursor: default;
    color: inherit;
  }
`

QuestionView.displayName = 'QuestionView'
