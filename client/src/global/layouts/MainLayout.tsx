import { FC, ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { Button, Logo } from '../components'

interface Props {
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  const navigate = useNavigate()

  const redirectLogin = () => {
    navigate('/login')
  }

  return (
    <Layout>
      <MainHeader>
        <Link to='/welcome'>
          <Logo size='2rem' />
          &nbsp;<Title>RockCat</Title>
        </Link>
        <Wrapper>
          <Button onClick={redirectLogin}>Login</Button>
        </Wrapper>
      </MainHeader>
      {children}
    </Layout>
  )
}
MainLayout.displayName = 'MainLayout'

const Layout = styled.div`
  min-height: 100%;
`
const Title = styled.span`
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
`

const MainHeader = styled.header`
  display: flex;
  align-items: baseline;
  height: 72px;
  padding: 12px 20px;
  border-bottom: 2px solid var(--color-gray-700);
`

const Wrapper = styled.div`
  margin-left: auto;
`
