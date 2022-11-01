import { getTokenFromStorage } from './getTokenFromStorage'

export const authFetch = async (input: RequestInfo, init?: RequestInit) => {
  const auth = getTokenFromStorage()
  const options: RequestInit = init ?? {}
  const defaultHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${auth?.access_token}`,
  }
  options.headers = defaultHeaders

  const response = await fetch(input, options)

  return response
}
