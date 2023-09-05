import { useEffect, useState } from 'react';

interface Location {
  lat: number;
  lng: number;
}

export default function useCurrentLocation() {
  const [locaction, setLocation] = useState<Location>();

  useEffect(() => {
    const getCurrentLocation = () =>
      new Promise<Location>(() => {
        if (!('geolocation' in navigator)) return;

        navigator.geolocation.getCurrentPosition((position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        });
      });

    getCurrentLocation();
  }, []);

  return locaction;
}
