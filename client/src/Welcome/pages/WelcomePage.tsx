import { FC } from 'react'

import { PublicLayout } from '../../global'
import { WelcomeContainer } from '../components'

const WelcomePage: FC = () => (
  <PublicLayout>
    <WelcomeContainer />
  </PublicLayout>
)

WelcomePage.displayName = 'WelcomePage'

export default WelcomePage
