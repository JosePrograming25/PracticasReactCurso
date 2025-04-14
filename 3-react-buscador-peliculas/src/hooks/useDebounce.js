// no en uso

import { useEffect, useState } from 'react'

export default function useDebounce (value, timeout) {
  const [valueFinaly, setValueFinaly] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setValueFinaly(value)
    }, timeout)
    return () => {
      clearTimeout(handler)
    }
  }, [value, timeout])

  return { valueFinaly }
}
