import { useEffect, useState } from 'react';

type TLocation = { latitude: number; longitude: number };
type TError = { code: number; message: string };
interface ILocation {
  loaded: boolean;
  coords?: TLocation;
  error?: TError;
}

const useGeolocation = () => {
  const [location, setLocation] = useState<ILocation>({
    loaded: false,
    coords: { latitude: 37.553651, longitude: 126.969763 }, // 기본은 서울역
  });

  const onSuccess = (position: { coords: TLocation }) => {
    setLocation({
      loaded: true,
      coords: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
    });
  };

  const onError = (error: TError) => {
    setLocation({
      loaded: true,
      error,
    });
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      onError({
        code: 0,
        message: 'Geolocation not supported',
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return location;
};

export default useGeolocation;
