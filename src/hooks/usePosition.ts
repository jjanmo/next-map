import { INITIAL_POSITION } from '@constants/map'
import { useEffect, useState } from 'react'

type Position = {
  latitude: number
  longitude: number
}

export default function usePosition() {
  const [position, setPosition] = useState<Position>()

  //@TODO 쿼리에 포지션 값이 있다면 전달하는 로직 추가

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setPosition({
        latitude: INITIAL_POSITION.LAT,
        longitude: INITIAL_POSITION.LNG,
      })
      return
    }

    navigator.geolocation.getCurrentPosition((position) => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    })
  }, [])

  return { position }
}
