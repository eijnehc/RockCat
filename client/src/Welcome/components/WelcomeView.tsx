import { FC } from 'react'
import styled from 'styled-components'

import { useCoursesQuery } from '../apis'
import BackgroundImage from '../assets/stars.png'

export const WelcomeView: FC = () => {
  const { courses } = useCoursesQuery()
  console.log(courses)

  return <Wrapper>Welcome</Wrapper>
}

const Wrapper = styled.div`
  min-height: 100%;
  background-color: var(--color-offblack);
  background-image: url(${BackgroundImage});
`

WelcomeView.displayName = 'WelcomeView'
