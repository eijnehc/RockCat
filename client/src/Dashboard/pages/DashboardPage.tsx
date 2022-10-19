import { FC } from 'react'

import { MainLayout } from '../../global'
import { DashboardContainer } from '../components'

const DashboardPage: FC = () => (
  <MainLayout>
    <DashboardContainer />
  </MainLayout>
)

DashboardPage.displayName = 'DashboardPage'

export default DashboardPage
