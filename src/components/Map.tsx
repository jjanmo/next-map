import { useEffect, useRef } from 'react'
import usePosition from '@hooks/usePosition'
import useMap from '@hooks/useMap'
import Spinner from './Spinner'

interface Props {
  isLoading: boolean
}

export default function Map({ isLoading }: Props) {
  const map = useRef<naver.maps.Map>()
  const { position } = usePosition()
  const { initializeMap } = useMap()

  useEffect(() => {
    if (!position) return

    const { latitude, longitude } = position
    const location = new naver.maps.LatLng(latitude, longitude)
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 14,
      zoomControl: false,
    }

    map.current = new naver.maps.Map('map', mapOptions)
    initializeMap(map.current)

    return () => {
      map.current?.destroy()
    }
  }, [position, initializeMap])

  return (
    <>
      {isLoading && (
        <div className="w-full h-full flex justify-center items-center absolute top-0 left-0 z-10">
          <Spinner size={100} />
        </div>
      )}
      <div id="map" style={{ height: '100%' }}></div>
    </>
  )
}
