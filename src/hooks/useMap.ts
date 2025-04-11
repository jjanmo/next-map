import { useCallback, useRef } from 'react'
import { swrKey } from '@constants/swr'
import { mutate } from 'swr'
import { INITIAL_ZOOM } from '@constants/map'

interface Params {
  position: {
    latitude: number
    longitude: number
  }
  handler: () => void
}

export default function useMap() {
  const map = useRef<naver.maps.Map>()

  const initializeMap = useCallback(({ position, handler }: Params) => {
    const { latitude, longitude } = position
    const location = new naver.maps.LatLng(latitude, longitude)
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: INITIAL_ZOOM,
      zoomControl: false,
    }
    map.current = new naver.maps.Map('map', mapOptions)
    map.current?.addListener('click', handler)
    mutate(swrKey.map, map.current)
  }, [])

  return {
    initializeMap,
  }
}
