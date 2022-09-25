import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { GlobalStyles, RocketSpinner } from './global'
import { router } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Suspense
      fallback={
        <div
          // Have to do inline styles here as this is the root
          style={{ display: 'grid', placeContent: 'center', minHeight: '100%' }}
        >
          <RocketSpinner />
        </div>
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
)
