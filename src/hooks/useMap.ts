import { useCallback } from 'react'
import { swrKey } from '@constants/swr'
import { mutate } from 'swr'
import { INITIAL_ZOOM, INITIAL_POSITION } from '@constants/map'

type Position = {
  latitude: number
  longitude: number
}
type Params = { position: Position; zoom: number; handler: () => void }

export default function useMap() {
  const initializeMap = useCallback(({ position, zoom, handler }: Params) => {
    const { latitude, longitude } = position
    const location = new naver.maps.LatLng(latitude, longitude)
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom,
    }

    const map = new naver.maps.Map('map', mapOptions)
    map.addListener('click', handler)
    mutate(swrKey.map, map)
  }, [])

  const getMapOption = useCallback((map: naver.maps.Map) => {
    if (!map) {
      return { latitude: INITIAL_POSITION.LAT, longitude: INITIAL_POSITION.LNG, zoom: INITIAL_ZOOM }
    }

    const center = map.getCenter()
    const latLng = new naver.maps.LatLng(center.y, center.x) // getCenter의 리턴타입 : PointObjectLiteral → naver.maps.LatLng 를 사용하여 타입변환 필요
    const zoom = map.getZoom()

    return {
      latitude: latLng.lat(),
      longitude: latLng.lng(),
      zoom,
    }
  }, [])

  const resetMap = useCallback((map: naver.maps.Map) => {
    if (!map) return

    map.morph(new naver.maps.LatLng(INITIAL_POSITION.LAT, INITIAL_POSITION.LNG), INITIAL_ZOOM)
  }, [])

  return {
    initializeMap,
    getMapOption,
    resetMap,
  }
}
