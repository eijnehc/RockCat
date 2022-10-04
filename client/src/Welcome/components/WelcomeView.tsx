import { FC } from 'react'
import styled from 'styled-components'

import BackgroundImage from '../assets/stars.png'

export const WelcomeView: FC = () => {
  return <Wrapper>Welcome</Wrapper>
}

const Wrapper = styled.div`
  min-height: 100%;
  background-color: var(--color-offblack);
  background-image: url(${BackgroundImage});
`

WelcomeView.displayName = 'WelcomeView'
