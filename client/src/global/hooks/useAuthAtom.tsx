import { useState } from 'react'

export function useAuthAtom() {
  const [auth] = useState(() => {
    const jsonValue = localStorage.getItem('sb-lwxxxxjdxlfdiiihybrl-auth-token')

    if (jsonValue !== null) {
      return JSON.parse(jsonValue)
    } else {
      return undefined
    }
  })

  return [auth]
}
