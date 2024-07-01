import { Store } from '@/types/store'
import { useEffect, useRef } from 'react'
import { generateStoreMarkerImage } from 'src/utils'

interface Props {
  map: naver.maps.Map
  store: Store
  onClick: () => void
  isSelected?: boolean
}

export default function Marker({ map, store, onClick, isSelected }: Props) {
  const marker = useRef<naver.maps.Marker | null>(null)

  const { coordinates, season } = store
  const [lat, lng] = coordinates

  useEffect(() => {
    if (map) {
      marker.current = new naver.maps.Marker({
        position: new naver.maps.LatLng(lat, lng),
        map,
        icon: generateStoreMarkerImage(season, isSelected ?? false),
      })
    }

    if (marker.current) {
      naver.maps.Event.addListener(marker.current, 'click', onClick)
    }
  }, [isSelected, lat, lng, map, onClick, season])

  return null
}
