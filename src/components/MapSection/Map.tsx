import Script from 'next/script'
import { useCallback, useEffect, useRef, useState } from 'react'
import useCurrentLocation from '@hooks/useCurrentLocation'

export default function Map() {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const mapObj = useRef<naver.maps.Map>()
  const curLocation = useCurrentLocation()

  const initializeMap = useCallback(() => {
    if (!mapRef.current) return
    if (!curLocation) return

    const location = new window.naver.maps.LatLng(curLocation.lat, curLocation.lng)
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      zoomControl: false,
    }

    const map = new window.naver.maps.Map(mapRef.current, mapOptions)
    mapObj.current = map
  }, [curLocation])

  useEffect(() => {
    initializeMap()

    return () => {
      mapObj.current?.destroy()
    }
  }, [curLocation, initializeMap])

  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    if (curLocation) setLoading(false)
    else setLoading(true)
  }, [curLocation])

  return (
    <>
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        type="text/javascript"
        strategy="afterInteractive"
        onReady={initializeMap}
      />
      {/* {loading ? (
        <div>로딩중....</div>
      ) : (
        <div ref={mapRef} style={{ height: '100%' }}></div>
      )} */}

      <div ref={mapRef} style={{ height: '100%' }}></div>
    </>
  )
}
