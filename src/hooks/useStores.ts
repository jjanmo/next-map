import { Store } from '@/types/store'
import { useCallback } from 'react'
import { swrKey } from 'src/constants/swr'
import { mutate } from 'swr'

export default function useStores() {
  const initializeStores = useCallback((data: Store[]) => {
    mutate(swrKey.stores, data)
  }, [])

  return {
    initializeStores,
  }
}
