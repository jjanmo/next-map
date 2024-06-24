import { useEffect, useRef } from 'react'
import usePosition from '@hooks/usePosition'

export default function Map() {
  const { position } = usePosition()
  const map = useRef<naver.maps.Map>()

  useEffect(() => {
    if (!position) return

    const { latitude, longitude } = position
    const location = new window.naver.maps.LatLng(latitude, longitude)
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      zoomControl: false,
    }

    map.current = new naver.maps.Map('map', mapOptions)

    return () => {
      map.current?.destroy()
    }
  }, [position])

  return <div id="map" style={{ height: '100%' }}></div>
}
