export const getTokenFromStorage = () => {
  const jsonValue = localStorage.getItem('sb-lwxxxxjdxlfdiiihybrl-auth-token')

  if (jsonValue) {
    return JSON.parse(jsonValue)
  }

  return undefined
}
