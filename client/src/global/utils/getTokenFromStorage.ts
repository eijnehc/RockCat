export const getTokenFromStorage = () => {
  const jsonValue = localStorage.getItem('access_token')

  if (jsonValue) {
    return JSON.parse(jsonValue)
  }

  return undefined
}
