import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from '../components'

const NotFoundPage: FC = () => {
  const navigate = useNavigate()

  const redirectLogin = () => {
    navigate('/login')
  }

  const redirectBack = () => {
    navigate(-1)
  }

  return (
    <Wrapper>
      <div>The page you are looking for cannot be found</div>
      <FlexRow>
        <Button onClick={redirectLogin}>Go to Login</Button>
        <Button onClick={redirectBack}>Go back</Button>
      </FlexRow>
    </Wrapper>
  )
}
NotFoundPage.displayName = 'NotFoundPage'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: center;
  align-items: center;
`

const FlexRow = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 12px;
`

export default NotFoundPage
