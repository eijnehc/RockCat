import { FC, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

import { apiRoutes } from '../../apiRoutes'
import { supabase } from '../../global'
import { orderSuccessQuery, useCoursesQuery } from '../apis'
import BackgroundImage from '../assets/stars.png'

export const WelcomeView: FC = () => {
  const { courses } = useCoursesQuery()
  const [searchParams] = useSearchParams()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    const fetchStripeCustomer = async (sessionId: string | null) => {
      if (sessionId) {
        const customer = await orderSuccessQuery(sessionId)
        console.log(customer)
        // await supabase.from('profile').insert({ email: customer.email, stripe_customer: sessionId })
      }
    }
    fetchStripeCustomer(sessionId)
  }, [!sessionId])

  return (
    <Wrapper>
      Welcome
      <form action={apiRoutes.createCheckoutSessionHttpUrl} method='POST'>
        <button>Checkout</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100%;
  background-color: var(--color-offblack);
  background-image: url(${BackgroundImage});
`

WelcomeView.displayName = 'WelcomeView'
