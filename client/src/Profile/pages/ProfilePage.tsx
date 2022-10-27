import { FC } from 'react'

import { MainLayout } from '../../global'
import { ProfileContainer } from '../components'

const ProfilePage: FC = () => (
  <MainLayout>
    <ProfileContainer />
  </MainLayout>
)

ProfilePage.displayName = 'ProfilePage'

export default ProfilePage
