import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const DashboardPage = lazy(() => import('../../Dashboard/pages/DashboardPage'))
const HomePage = lazy(() => import('../../Home/pages/HomePage'))
const LoginPage = lazy(() => import('../../Auth/pages/LoginPage'))
const PageNotFound = lazy(() => import('../pages/PageNotFound'))
const ProfilePage = lazy(() => import('../../Profile/pages/ProfilePage'))
const WelcomePage = lazy(() => import('../../Welcome/pages/WelcomePage'))

export const router = createBrowserRouter([
  {
    path: '/welcome',
    element: <WelcomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'dashboard/:questionId',
    element: <DashboardPage />,
  },
  {
    path: 'profile',
    element: <ProfilePage />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])
