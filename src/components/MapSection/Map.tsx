import Script from 'next/script';
import { useEffect, useRef } from 'react';

export default function Map() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapObj = useRef<naver.maps.Map>();

  const initializeMap = () => {
    if (!mapRef.current) return;

    const location = new window.naver.maps.LatLng(37.5656, 126.9769);
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      zoomControl: false,
    };

    const map = new window.naver.maps.Map(mapRef.current, mapOptions);
    mapObj.current = map;
  };

  useEffect(() => {
    return () => {
      mapObj.current?.destroy();
    };
  }, []);

  return (
    <>
      <Script
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NCP_CLIENT_ID}`}
        type="text/javascript"
        strategy="afterInteractive"
        onReady={initializeMap}
      />
      <div ref={mapRef} style={{ height: '100%' }}></div>
    </>
  );
}
