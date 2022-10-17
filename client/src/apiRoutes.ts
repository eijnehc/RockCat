export const apiRoutes = {
  orderSuccessHttpUrl: (sessionId: string) => `/api/v1/order/success?session_id=${sessionId}`,
  createCheckoutSessionHttpUrl: `/api/v1/create-checkout-session`,
}
