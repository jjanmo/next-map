import { Store } from '@/types/store'
import { swrKey } from '@constants/swr'
import { useCallback } from 'react'
import { mutate } from 'swr'

export default function useStore() {
  const setCurrentStore = useCallback((data: Store) => {
    mutate(swrKey.currentStore, data)
  }, [])

  const clearCurrentStore = useCallback(() => {
    mutate(swrKey.currentStore, null)
  }, [])

  return {
    setCurrentStore,
    clearCurrentStore,
  }
}
