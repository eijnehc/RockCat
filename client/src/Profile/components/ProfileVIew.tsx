import { FC } from 'react'
import { Calendar, GitHub } from 'react-feather'
import styled from 'styled-components'

import { Avatar } from '../../global'

export const ProfileView: FC = () => {
  return (
    <Wrapper>
      <Card>
        <UserWrapper>
          <AvatarWrapper>
            <Avatar userName='Chen Jie' color='fill' size='large' />
          </AvatarWrapper>
          <UserInfo>
            <h2 style={{ fontSize: '1.2rem' }}>John Doe</h2>
            <div style={{ color: 'var(--color-gray-700)' }}>chenjiesgx@gmail.com</div>
          </UserInfo>
        </UserWrapper>
        <AdditionalInfoWrapper>
          <AdditionalInfo>
            <Calendar style={{ marginRight: '6px' }} />
            Joined in <span style={{ color: 'var(--color-black)' }}>March 2022</span>
          </AdditionalInfo>
          <AdditionalInfo>
            <GitHub style={{ marginRight: '6px' }} />
            Linked with <span style={{ color: 'var(--color-black)' }}>JohnDoe</span>
          </AdditionalInfo>
        </AdditionalInfoWrapper>
        <EditUserWrapper>
          <ButtonWrapper>Disconnect Github</ButtonWrapper>
          <ButtonWrapper>Edit Profile</ButtonWrapper>
        </EditUserWrapper>
      </Card>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 64px 0px;
`

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--color-black);
  margin-left: auto;
  margin-right: auto;
  width: clamp(200px, 60%, 350px);
  max-width: 100%;
  height: 350px;
  border-radius: 2rem;
  background-color: var(--color-white);
`

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AvatarWrapper = styled.div`
  display: inline-block;
`

const UserInfo = styled.div`
  text-align: center;
  margin-top: 48px;
`

const AdditionalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-self: center;
`

const AdditionalInfo = styled.div`
  color: var(--color-gray-700);
`

const EditUserWrapper = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  background-color: var(--color-gray-100);
`

const ButtonWrapper = styled.button`
  text-align: center;
  padding: 8px;
  color: var(--color-gray-700);

  :first-of-type {
    border-bottom: 1px solid var(--color-primary-medium);
  }

  :hover {
    color: inherit;
  }
`

ProfileView.displayName = 'ProfileView'
