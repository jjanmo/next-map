import { useEffect, useRef } from 'react'

interface Icon {
  url: string
  size: naver.maps.Size
  origin: naver.maps.Point
  scaledSize: naver.maps.Size
}

interface Props {
  map: naver.maps.Map
  lat: number
  lng: number
  icon: Icon
  onClick: () => void
}

export default function Marker({ map, lat, lng, icon, onClick }: Props) {
  const marker = useRef<naver.maps.Marker | null>(null)

  useEffect(() => {
    if (map) {
      marker.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lng),
        map,
        icon,
      })
    }

    if (marker.current) {
      naver.maps.Event.addListener(marker.current, 'click', onClick)
    }
  }, [map, lat, lng, icon, onClick])

  return null
}
