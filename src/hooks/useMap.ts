import { useEffect, useRef } from 'react'
import { swrKey } from '@constants/swr'
import { mutate } from 'swr'
import usePosition from './usePosition'
import { INITIAL_ZOOM } from '@constants/map'

interface Params {
  handler: () => void
}

export default function useMap({ handler }: Params) {
  const { position } = usePosition()
  const map = useRef<naver.maps.Map>()

  useEffect(() => {
    if (!position) return

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

    return () => {
      map.current?.destroy()
    }
  }, [handler, position])
}
