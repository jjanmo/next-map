import { useState } from 'react'

export const INITIAL_POSITION_LAT = 37.3595704
export const INITIAL_LOCATION_LNG = 127.105399
export const INITIAL_ZOOM = 10

export default function useMap() {
  const [loading, isLoading] = useState<boolean>(true)

  // map을 가져온다 + 현재위치 확인 -> map의 상태관리
  // map을 캐싱한다
  // map을 초기화한다(리셋)

  return {}
}
