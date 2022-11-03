import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'

import { GlobalStyles, RocketSpinner } from './global'
import { router } from './global'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
)
