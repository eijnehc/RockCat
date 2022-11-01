import { FC } from 'react'
import { Aperture, Codepen, Map } from 'react-feather'
import styled from 'styled-components'

import { apiRoutes } from '../../apiRoutes'
import { Avatar, Logo } from '../../global'
import { QUERIES } from '../../global/constant'
import RocketLaunch from '../assets/rocket-launch.png'
import BackgroundImage from '../assets/stars.png'

import { CourseHighlights, Testimonials } from './Constants'

export const WelcomeView: FC = () => {
  // KIV Random profile link
  // <Avatar userName='Chen Jie' imageUrl='https://api.lorem.space/image/face?w=150&h=150' />
  const renderImage = (id: number) => {
    switch (id) {
      case 1:
        return <Aperture size='80px' />
      case 2:
        return <Codepen size='80px' />
      case 3:
        return <Map size='60px' />
      default:
        null
    }
  }
  return (
    <Wrapper>
      <HeroWrapper>
        <BoxContent>
          <Header>Code Confidently Like a Pro</Header>
          <p>
            RockCat is where students find fun after-school activities, that empower them to design, code,
            create, and spark a passion, so they can go and change the world with a smile on their face.
          </p>
          <br />
          <form action={apiRoutes.createCheckoutSessionHttpUrl} method='POST'>
            <Button>Get Started</Button>
          </form>
        </BoxContent>
        <RocketLaunchWrapper>
          <img src={RocketLaunch} alt='rocket-launch' />
        </RocketLaunchWrapper>
      </HeroWrapper>
      <CourseHighlightsWrapper>
        <Header style={{ color: 'var(--color-primary-dark)' }}>What We Provide</Header>
        <CourseHighlightsContent>
          {CourseHighlights.map((item) => (
            <Card key={item.title}>
              <ImageWrapper>{renderImage(item.id)}</ImageWrapper>
              <CardTitle>{item.title}</CardTitle>
              <p>{item.body}</p>
            </Card>
          ))}
        </CourseHighlightsContent>
      </CourseHighlightsWrapper>
      <TestimonialsWrapper>
        <Header style={{ color: 'var(--color-primary-dark)' }}>Testimonials</Header>
        <TestimonialsContent>
          {Testimonials.map((item) => (
            <TestimonialCard key={item.name}>
              <p>{item.body}</p>
              <TestimonialPersonCard>
                <div>
                  Avatar Placeholder
                </div>
                <div>
                  {item.name}
                </div>
              </TestimonialPersonCard>
            </TestimonialCard>
          ))}
        </TestimonialsContent>
      </TestimonialsWrapper>
      <FooterWrapper>
        <div>
          <Logo size='24px' />
          &nbsp;RockCat
        </div>
        <p>Unlock your potential | Master the Code</p>
        <p style={{ color: 'var(--color-gray-500)' }}>&copy; 2022 RockCat. All rights reserved.</p>
      </FooterWrapper>
    </Wrapper>
  )
}

const TestimonialPersonCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const TestimonialCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 250px;
  max-width: 350px;
  justify-self: center;
  text-align: justify;
  padding: 2rem;
  border: 1px solid var(--color-gray-700);
  border-radius: 2rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: 100%;
  background-color: var(--color-offblack);
  color: var(--color-white);
  background-image: url(${BackgroundImage});
`

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 48px;
`

const Header = styled.header`
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: 32px;
`

const BoxContent = styled.div`
  width: clamp(200px, 40%, 400px);
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${QUERIES.laptopAndUp} {
    display: block;
  }
`

const Button = styled.button`
  color: inherit;
  background-color: var(--color-primary-medium);
  border-radius: 2rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 1rem 3rem;
  font-weight: 700;
  opacity: 0.9;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`

const RocketLaunchWrapper = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: inline-block;
  }
`

const CourseHighlightsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

const CourseHighlightsContent = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
`

const Card = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 250px;
  max-width: 350px;
  justify-self: center;
  text-align: justify;
  padding: 2rem;
`

const ImageWrapper = styled.div`
  display: grid;
  place-content: center;
  background-color: var(--color-secondary-dark);
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin-bottom: 16px;
`

const CardTitle = styled.div`
  color: var(--color-secondary-medium);
  font-weight: var(--font-weight-bold);
  margin-bottom: 16px;
`
const TestimonialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-bottom: 32px;
`
const TestimonialsContent = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
`

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid var(--color-gray-700);
  padding: 16px;
  gap: 8px;
`

WelcomeView.displayName = 'WelcomeView'
