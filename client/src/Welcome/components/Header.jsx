import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'



export function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src='../src/Welcome/assets/rocket-logo.svg' alt=''></Logo>
          <h1 style={{ fontSize: '3em' }}>RockCat</h1>
          <Button>Login</Button>
        </Nav>
      </Container>
      <hr></hr>
      <Container>
        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              RockCat is where students find fun after-school activities, that empower them to design, code, create, and spark a passion, so they can go and change the world with a smile on their face.
            </p>

            <br></br>
            <Button bg='#ff0099' color='#fff' padding-top>
              Get Started
            </Button>
          </div>

          <Image src='../src/Welcome/assets/rocket-launch.svg' alt='' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}