import { supabase } from '../../../global'
import { StripeCustomer } from '../../interfaces'

export const createNewUserQuery = async (customer: StripeCustomer, sessionId: string) => {
  await supabase.from('profile').insert({
    email: customer.email,
    name: customer.name,
    stripe_customer: sessionId,
    is_subscribed: true,
  })
}
