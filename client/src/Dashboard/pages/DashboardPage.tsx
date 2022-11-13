import { FC } from 'react'
import { Toaster } from 'react-hot-toast'

import { PrivateLayout } from '../../global'
import { DashboardContainer } from '../components'

const DashboardPage: FC = () => (
  <PrivateLayout>
    <Toaster />
    <DashboardContainer />
  </PrivateLayout>
)

DashboardPage.displayName = 'DashboardPage'

export default DashboardPage
