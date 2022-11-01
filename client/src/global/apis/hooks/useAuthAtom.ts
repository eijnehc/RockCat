import { useEffect, useState } from 'react'

export function useAuthAtom(key: string) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)

    if (jsonValue !== null) {
      return JSON.parse(jsonValue)
    } else {
      return ''
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
