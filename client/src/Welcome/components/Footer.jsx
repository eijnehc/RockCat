import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>

        <Flex>
          <ul>
            <img src='../src/Welcome/assets/rocket-logo.svg' alt='' width={50} height={50}></img>
            <li>
              A Group Project by students of NUS IT5007 AY2022 Sem1
            </li>
            <li>+65 1234 5678</li>
            <li>example@rockcat.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2021 RockCat. All rights reserved.</p>
      </Container>
    </StyledFooter>
  )
}