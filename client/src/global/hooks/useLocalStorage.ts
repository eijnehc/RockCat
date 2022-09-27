import { useEffect, useState } from 'react'

const PREFIX = 'RockCat'

export function useLocalStorage(key: string, initialValue: string) {
  const prefixedKey = PREFIX + key

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)

    if (jsonValue !== null) {
      return JSON.parse(jsonValue)
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}
