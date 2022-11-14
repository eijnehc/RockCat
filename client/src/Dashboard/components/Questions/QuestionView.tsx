import { FC, useState } from 'react'
import { Home, Key } from 'react-feather'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Loader, Tooltip } from '../../../global'
import { QuestionsOverview } from '../../../Home'

interface Props {
  question?: QuestionsOverview
  isLoading: boolean
  handlePagination: (cursor: string) => void
}

export const QuestionView: FC<Props> = ({ question, isLoading, handlePagination }) => {
  const [flip, setFlip] = useState(false)

  return (
    <Wrapper>
      <Card data-flipped={flip}>
        <Front>
          {isLoading ? (
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          ) : (
            <>
              <Header>
                <BackButton to='/'>
                  <Home size={32} />
                </BackButton>
                <Title>{question?.data[0].title}</Title>
                <Tooltip text='answer'>
                  <Key
                    style={{ cursor: 'pointer', display: 'inline-block' }}
                    onClick={() => setFlip(!flip)}
                  />
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
        </Front>
        <Back>
          <Header>
            <Title>Answer</Title>
            <Key style={{ cursor: 'pointer' }} onClick={() => setFlip(!flip)} />
          </Header>
          {question?.data[0].answers}
        </Back>
      </Card>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 200px;
  color: var(--color-black);
  perspective: 600px;
`

const Card = styled.div`
  transform-style: preserve-3d;
  transform-origin: center right;
  transition: transform 1s;

  &[data-flipped='true'] {
    transform: translateX(-100%) rotateY(-180deg);
  }
`

const Front = styled.div`
  position: absolute;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  background-color: var(--color-white);
  padding: 1rem;
  gap: 16px;
  backface-visibility: hidden;
`

const Back = styled.div`
  position: absolute;
  height: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem 0 0 1rem;
  background-color: var(--color-white);
  border: solid 3px var(--color-primary-medium);
  padding: 1rem;
  gap: 16px;
  overflow-y: auto;

  backface-visibility: hidden;
  transform: rotateY(180deg);
`

const LoaderWrapper = styled.div`
  display: grid;
  place-content: center;
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
