import { FC } from 'react'

import { MainLayout } from '../../global'
import { HomeContainer } from '../components'

const HomePage: FC = () => (
  <MainLayout>
    <HomeContainer />
  </MainLayout>
)

HomePage.displayName = 'HomePage'

export default HomePage
