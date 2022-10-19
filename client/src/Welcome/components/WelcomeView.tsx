import { FC } from 'react'
import styled from 'styled-components'

import { apiRoutes } from '../../apiRoutes'
import BackgroundImage from '../assets/stars.png'

export const WelcomeView: FC = () => {
  return (
    <Wrapper>
      Welcome
      <form action={apiRoutes.createCheckoutSessionHttpUrl} method='POST'>
        <button>Checkout</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100%;
  background-color: var(--color-offblack);
  background-image: url(${BackgroundImage});
`

WelcomeView.displayName = 'WelcomeView'
