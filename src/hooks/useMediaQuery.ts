import { useEffect, useState } from 'react'

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    // 초기 상태 설정
    setMatches(media.matches)

    // 미디어 쿼리 변경 감지
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches)
    }

    // 이벤트 리스너 추가
    media.addEventListener('change', listener)

    // 클린업 함수
    return () => {
      media.removeEventListener('change', listener)
    }
  }, [query])

  return matches
}

export default useMediaQuery
