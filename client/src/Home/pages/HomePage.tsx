import { FC } from 'react'

import { PrivateLayout } from '../../global'
import { HomeContainer } from '../components'

const HomePage: FC = () => (
  <PrivateLayout>
    <HomeContainer />
  </PrivateLayout>
)

HomePage.displayName = 'HomePage'

export default HomePage
