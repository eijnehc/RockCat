import { FC, ReactNode, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, MenuButton, MenuItem, MenuList } from '@reach/menu-button'
import styled from 'styled-components'

import { Avatar, Logo } from '../components'
import { supabase } from '../utils'

interface Props {
  children: ReactNode
}

export const PrivateLayout: FC<Props> = ({ children }) => {
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

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/welcome')
  }

  if (!profile) return null

  return (
    <>
      <MainHeader>
        <Link to='/'>
          <Logo size='2rem' />
          &nbsp;<Title>RockCat</Title>
        </Link>
        <Wrapper>
          <Menu>
            <MenuButton>
              <Avatar userName='Chen Jie' />
            </MenuButton>
            <StyledMenuList>
              <StyledMenuItem onSelect={redirectHome}>Home</StyledMenuItem>
              <StyledMenuItem onSelect={redirectProfile}>My Account</StyledMenuItem>
              <StyledMenuItem onSelect={handleLogout}>Log Out</StyledMenuItem>
            </StyledMenuList>
          </Menu>
        </Wrapper>
      </MainHeader>
      {children}
    </>
  )
}

const Title = styled.span`
  font-size: 2rem;
  font-weight: var(--font-weight-bold);
`

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 2px solid var(--color-gray-700);
`

const Wrapper = styled.div`
  margin-left: auto;
`

const StyledMenuList = styled(MenuList)`
  display: block;
  background-color: var(--color-gray-500);
  white-space: nowrap;
  overflow: hidden;
  border-radius: 8px;
  transform: translateY(1rem);
  cursor: pointer;
`

const StyledMenuItem = styled(MenuItem)`
  font-weight: var(--font-weight-medium);
  padding: 0.5rem;
  padding-right: 2rem;

  &[data-selected] {
    background-color: var(--color-primary-medium);
  }

  :last-of-type {
    border-top: 1px solid var(--color-gray-300);
  }
`

PrivateLayout.displayName = 'PrivateLayout'