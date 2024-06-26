import { useCallback } from 'react'
import { swrKey } from '@constants/swr'
import { mutate } from 'swr'

export default function useMap() {
  const initializeMap = useCallback((map: naver.maps.Map) => {
    mutate(swrKey.map, map)
  }, [])

  return {
    initializeMap,
  }
}
