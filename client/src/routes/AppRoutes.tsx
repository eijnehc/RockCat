import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const DashboardPage = lazy(() => import('../Dashboard/pages/DashboardPage'))
const HomePage = lazy(() => import('../Home/pages/HomePage'))
const LoginPage = lazy(() => import('../Auth/pages/LoginPage'))
const PageNotFound = lazy(() => import('../global/pages/PageNotFound'))
const ProfilePage = lazy(() => import('../Profile/pages/ProfilePage'))
const WelcomePage = lazy(() => import('../Welcome/pages/WelcomePage'))

export const router = createBrowserRouter([
  {
    /*Will become landing page once dashboard is ready*/
    path: '/welcome',
    element: <WelcomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/home',
    element: <HomePage />,
  },
  {
    /*Temporarily put this as the default page as this is the core product */
    path: '/',
    element: <DashboardPage />,
    // element: <RocketSpinner />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])
