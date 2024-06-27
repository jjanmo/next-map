import { useEffect } from 'react'

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
}

export default function Marker({ map, lat, lng, icon }: Props) {
  useEffect(() => {
    if (map) {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lng),
        map,
        icon,
      })
    }
  }, [map, lat, lng, icon])

  return null
}
