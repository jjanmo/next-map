import { useEffect, useState } from 'react'
import { INITIAL_POSITION_LAT, INITIAL_POSITION_LNG } from '@constants/map'

type Position = {
  latitude: number
  longitude: number
}

export default function usePosition() {
  const [position, setPosition] = useState<Position>()

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      setPosition({
        latitude: INITIAL_POSITION_LAT,
        longitude: INITIAL_POSITION_LNG,
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
