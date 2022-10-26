import { FC } from 'react'
import { EyeOff } from 'react-feather'
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
      <EyeOff size={72} />
      <div>The page you are looking for cannot be found</div>
      <FlexRow>
        <Button emphasis='outline' onClick={redirectLogin}>
          Go to Login
        </Button>
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
  gap: 24px;
`

const FlexRow = styled.div`
  display: flex;
  gap: 12px;
`

export default NotFoundPage
