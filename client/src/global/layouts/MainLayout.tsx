import { FC, ReactNode, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { Logo } from '../components'
import { supabase } from '../utils'

interface Props {
  children: ReactNode
}

export const MainLayout: FC<Props> = ({ children }) => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState<any>(null)

  useEffect(() => {
    /* fires when a user signs out */
    const { data: authListener } = supabase.auth.onAuthStateChange((event) => {
      console.log(event)
      if (event === 'SIGNED_OUT') {
        navigate('/welcome')
      }
    })
    checkUser()
    return () => {
      authListener.subscription.unsubscribe()
    }
  }, [])

  async function checkUser() {
    /* when the component loads, checks user to show or hide Sign In link */
    const user = await supabase.auth.getUser()
    if (!user?.data?.user) {
      navigate('/welcome')
    } else {
      setProfile(user.data.user)
    }
  }

  const redirectHome = () => {
    navigate('/')
  }

  const redirectDashboard = () => {
    navigate('/dashboard')
  }

  const redirectProfile = () => {
    navigate('/profile')
  }

  if (!profile) return null

  return (
    <Layout>
      <MainHeader>
        <Link to='/'>
          <Logo size='2rem' />
          &nbsp;<Title>RockCat</Title>
        </Link>
        <Wrapper>
          <button onClick={redirectHome}>Home</button>
          <button onClick={redirectDashboard}>Dashboard</button>
          <button onClick={redirectProfile}>Profile</button>
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
