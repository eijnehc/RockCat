export const apiRoutes = {
  createCheckoutSessionHttpUrl: `/api/v1/create-checkout-session`,
  signUpHttpUrl: (sessionId: string) => `/api/v1/sign-up?session_id=${sessionId}`,
  signInHttpUrl: (email: string) => `/api/v1/sign-in?email=${email}`,
  questionsHttpUrl: (query: string) => `/api/v1/questions${query}`,
  userHttpUrl: '/api/v1/user',
  updateUserHttpUrl: '/api/v1/update-user',
  updateAvatarHttpUrl: '/api/v1/update-avatar',
}
