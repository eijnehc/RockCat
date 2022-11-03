import { apiRoutes } from '../../../apiRoutes'

export const signUpQuery = async (sessionId: string) => {
  const res = await fetch(apiRoutes.signUpHttpUrl(sessionId), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ session_id: sessionId }),
  })

  return res
}
