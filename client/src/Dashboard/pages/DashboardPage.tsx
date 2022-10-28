import { FC } from 'react'

import { PrivateLayout } from '../../global'
import { DashboardContainer } from '../components'

const DashboardPage: FC = () => (
  <PrivateLayout>
    <DashboardContainer />
  </PrivateLayout>
)

DashboardPage.displayName = 'DashboardPage'

export default DashboardPage
