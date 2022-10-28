import { FC, useState } from 'react'
import { Calendar, GitHub } from 'react-feather'
import styled from 'styled-components'

import { Avatar, Button, Input, Modal } from '../../global'

import { Profile } from './ProfileContainer'

interface Props {
  profile: Profile
  handleUpdateProfile: () => void
}

export const ProfileView: FC<Props> = ({ profile, handleUpdateProfile }) => {
  const [isOpen, setIsOpen] = useState(false)
  const date = new Date(profile.data[0].created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  })

  return (
    <>
      <Wrapper>
        <Card>
          <UserWrapper>
            <AvatarWrapper>
              <Avatar userName={profile.data[0].name} color='fill' size='large' />
            </AvatarWrapper>
            <UserInfo>
              <h2 style={{ fontSize: '1.2rem' }}>{profile.data[0].name}</h2>
              <div style={{ color: 'var(--color-gray-700)' }}>{profile.data[0].email}</div>
            </UserInfo>
          </UserWrapper>
          <AdditionalInfoWrapper>
            <AdditionalInfo>
              <Calendar style={{ marginRight: '6px' }} />
              Joined in <span style={{ color: 'var(--color-black)' }}>{date}</span>
            </AdditionalInfo>
            <AdditionalInfo>
              <GitHub style={{ marginRight: '6px' }} />
              Linked with <span style={{ color: 'var(--color-black)' }}>JohnDoe</span>
            </AdditionalInfo>
          </AdditionalInfoWrapper>
          <EditUserWrapper>
            <ButtonWrapper>Invoice</ButtonWrapper>
            <ButtonWrapper onClick={() => setIsOpen(true)}>Edit Profile</ButtonWrapper>
            <ButtonWrapper>Disconnect Github</ButtonWrapper>
          </EditUserWrapper>
        </Card>
      </Wrapper>
      <Modal title='Edit Profile' isOpen={isOpen} handleDismiss={() => setIsOpen(false)}>
        <Form onSubmit={handleUpdateProfile}>
          <Input name='name' defaultValue={profile.data[0].name} />
          <Input name='email' type='email' placeholder='email' defaultValue={profile.data[0].email} />
          <Button>Save</Button>
        </Form>
      </Modal>
    </>
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
  height: 400px;
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

  :not(:last-child) {
    border-bottom: 1px solid var(--color-primary-medium);
  }

  :hover {
    color: inherit;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

ProfileView.displayName = 'ProfileView'
