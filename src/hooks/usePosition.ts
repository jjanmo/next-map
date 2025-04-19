import { INITIAL_POSITION, INITIAL_ZOOM } from '@constants/map'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type Position = {
  latitude: number
  longitude: number
}

/**
 * @description 위치 정보를 가져오는 훅
 * @returns 위도, 경도, 줌 레벨
 */
export default function usePosition() {
  const router = useRouter()
  const { lat, lng, zoom } = router.query

  const [position, setPosition] = useState<Position>()

  const _zoom = Number(zoom) || INITIAL_ZOOM

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setPosition({
        latitude: INITIAL_POSITION.LAT,
        longitude: INITIAL_POSITION.LNG,
      })
      return
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = lat ? Number(lat) : position.coords.latitude
      const longitude = lng ? Number(lng) : position.coords.longitude

      setPosition({
        latitude,
        longitude,
      })
    })
  }, [lat, lng])

  return { position, zoom: _zoom }
}
