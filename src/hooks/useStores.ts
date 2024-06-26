import { useCallback } from 'react'
import { mutate } from 'swr'
import { Store } from '@/types/store'
import { swrKey } from '@constants/swr'

export default function useStores() {
  const initializeStores = useCallback((data: Store[]) => {
    mutate(swrKey.stores, data)
  }, [])

  return {
    initializeStores,
  }
}
