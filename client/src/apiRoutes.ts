export const apiRoutes = {
  createCheckoutSessionHttpUrl: `/api/v1/create-checkout-session`,
  signUpHttpUrl: (sessionId: string) => `/api/v1/sign-up?session_id=${sessionId}`,
}
