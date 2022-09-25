import { lazy } from 'react'

import { createBrowserRouter } from 'react-router-dom'

const CoursesPage = lazy(() => import('../Courses/pages/CoursesPage'))
const DashboardPage = lazy(() => import('../Dashboard/pages/DashboardPage'))
const LoginPage = lazy(() => import('../Auth/pages/LoginPage'))
const WelcomePage = lazy(() => import('../Welcome/pages/WelcomePage'))
const PageNotFound = lazy(() => import('../global/pages/PageNotFound'))

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
    path: '/courses',
    element: <CoursesPage />,
  },
  {
    /*Temporarily put this as the default page as this is the core product */
    path: '/',
    element: <DashboardPage />,
    // element: <RocketSpinner />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])
