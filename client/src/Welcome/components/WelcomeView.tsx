import { FC } from 'react'
import styled from 'styled-components'

import { ThemeProvider } from 'styled-components'

import { apiRoutes } from '../../apiRoutes'
import BackgroundImage from '../assets/stars.png'
import { Header } from './Header.jsx'
import Card from './Card.jsx'
import { Container } from './styles/Container.styled.js'
import content from './Content.js'
import Footer from './Footer'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
}

export const WelcomeView: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <hr></hr>
        <Footer />
        <form action={apiRoutes.createCheckoutSessionHttpUrl} method='POST'>
          <button>Checkout</button>
        </form>
      </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
  min-height: 100%;
  background-color: var(--color-offblack);
  background-image: url(${BackgroundImage});
`

WelcomeView.displayName = 'WelcomeView'
