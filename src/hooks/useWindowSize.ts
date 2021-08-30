import { useState, useEffect } from 'react'

interface WindowSize {
  width: number
  height: number
}
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0
  })

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }
  return windowSize
}
