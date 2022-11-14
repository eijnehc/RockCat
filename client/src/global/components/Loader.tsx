import { FC } from 'react'
import styled, { keyframes } from 'styled-components'

export const Loader: FC = () => {
  return <LoaderWrapper />
}

const Animate = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const LoaderWrapper = styled.div`
  display: block;
  width: 24px;
  height: 24px;

  :after {
    content: ' ';
    display: block;
    width: 48px;
    height: 48px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid var(--color-gray-700);
    border-color: var(--color-gray-700) transparent var(--color-gray-700) transparent;
    animation: ${Animate} 1.2s linear infinite;
  }
`
