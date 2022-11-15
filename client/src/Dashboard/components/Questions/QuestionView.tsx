import { FC, useState } from 'react'
import { Heart, Home, Key } from 'react-feather'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { Loader, Tooltip } from '../../../global'
import { QuestionsOverview } from '../../../Home'

interface Props {
  question?: QuestionsOverview
  isLoading: boolean
  onUpVote: () => void
  handlePagination: (cursor: string) => void
}

export const QuestionView: FC<Props> = ({ question, isLoading, onUpVote, handlePagination }) => {
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
          <HeartWrapper>
            <Heart fill='black' opacity={0.2} />
            <FillWrapper onClick={onUpVote}>
              <Fill likes={question?.data[0].likes} />
            </FillWrapper>
          </HeartWrapper>
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

const HeartWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`

const FillWrapper = styled.button`
  position: absolute;
  height: 24px;
  width: 24px;
  cursor: pointer;
  overflow: hidden;
  clip-path: path(
    'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'
  );
`
interface Likes {
  likes?: number
}

const Fill = styled.div<Likes>`
  position: relative;
  width: 24px;
  height: 24px;
  background-color: var(--color-primary-medium);
  transition: 0.3s;

  ${(props) => {
    const elevate = (likes?: number) => {
      switch (likes) {
        case 0:
          return '90%'
        case 1:
          return '65%'
        case 2:
          return '50%'
        case 3:
          return '35%'
        case 4:
          return '20%'
        case 5:
          return '0%'
        default:
          return '90%'
      }
    }

    return css`
      transform: translateY(${elevate(props.likes)});
    `
  }};
`

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
