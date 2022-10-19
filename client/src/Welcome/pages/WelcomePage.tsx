import { FC } from 'react'

import { MainLayout } from '../../global'
import { WelcomeContainer } from '../components'

const WelcomePage: FC = () => (
  <MainLayout>
    <WelcomeContainer />
  </MainLayout>
)

WelcomePage.displayName = 'WelcomePage'

export default WelcomePage
