import { useEffect } from 'react'

interface Props {
  map: naver.maps.Map
  lat: number
  lng: number
}

export default function Marker({ map, lat, lng }: Props) {
  useEffect(() => {
    if (map) {
      new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lng),
        map,
      })
    }
  }, [map, lat, lng])

  return null
}
