import { FC } from 'react'

import { PrivateLayout } from '../../global'
import { ProfileContainer } from '../components'

const ProfilePage: FC = () => (
  <PrivateLayout>
    <ProfileContainer />
  </PrivateLayout>
)

ProfilePage.displayName = 'ProfilePage'

export default ProfilePage
