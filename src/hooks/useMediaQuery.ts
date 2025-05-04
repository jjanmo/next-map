import { useEffect, useState, useRef } from 'react'
import { BREAKPOINTS } from '@constants/mediaQuery'

/**
 * @description 미디어쿼리 훅
 * @returns 모바일 여부와 데스크톱 여부를 반환 { isMobile: boolean, isDesktop: boolean }
 */
const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const observerRef = useRef<ResizeObserver | null>(null)

  useEffect(() => {
    const updateMatches = () => {
      const width = window.innerWidth
      setIsMobile(width < BREAKPOINTS.TABLET) // 테블릿 미만은 모바일로 취급
      setIsDesktop(width >= BREAKPOINTS.TABLET) // 테블릿 이상는 데스크톱으로 취급
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

  return { isMobile, isDesktop }
}

export default useMediaQuery
