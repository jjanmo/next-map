import { useEffect, useState, useRef } from 'react'
import { BREAKPOINTS } from '@constants/mediaQuery'

const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const observerRef = useRef<ResizeObserver | null>(null)

  useEffect(() => {
    const updateMatches = () => {
      const width = window.innerWidth
      setIsMobile(width <= BREAKPOINTS.MOBILE)
      setIsTablet(width > BREAKPOINTS.MOBILE && width <= BREAKPOINTS.TABLET)
      setIsDesktop(width >= BREAKPOINTS.DESKTOP)
    }

    updateMatches()

    observerRef.current = new ResizeObserver(updateMatches)
    observerRef.current.observe(document.documentElement)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return { isMobile, isTablet, isDesktop }
}

export default useMediaQuery
