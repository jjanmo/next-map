import { useCallback } from 'react'
import { swrKey } from '@constants/swr'
import { mutate } from 'swr'
import { INITIAL_ZOOM, INITIAL_POSITION } from '@constants/map'

type Position = {
  latitude: number
  longitude: number
}
type Params = { position: Position; handler: () => void }

export default function useMap() {
  const initializeMap = useCallback(({ position, handler }: Params) => {
    const { latitude, longitude } = position
    const location = new naver.maps.LatLng(latitude, longitude)
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: INITIAL_ZOOM,
      zoomControl: false,
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
    const latLng = new naver.maps.LatLng(center.y, center.x)
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
