import { getTokenFromStorage } from './getTokenFromStorage'

export const authFetch = async (input: RequestInfo, init?: RequestInit) => {
  const auth = getTokenFromStorage()
  const options: RequestInit = init ?? {}
  const defaultHeaders: HeadersInit = {
    Authorization: `Bearer ${auth}`,
  }

  options.headers = defaultHeaders

  const response = await fetch(input, options)

  return response
}
