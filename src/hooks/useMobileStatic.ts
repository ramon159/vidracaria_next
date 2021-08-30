import { useEffect, useState } from 'react'
import { useWindowSize } from './useWindowSize'

export function useMobileStatic() {
  const [isMobile, setIsMobile] = useState(true)

  const { width } = useWindowSize()

  useEffect(() => {
    setIsMobile(width <= 768)
  }, [width])

  return {
    isMobile
  }
}
