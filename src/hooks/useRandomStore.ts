import { Store } from '@/types/store'

import { swrKey } from '@constants/swr'
import useSWR from 'swr'
import useMap from './useMap'
import useStore from './useStore'

const useRandomStore = () => {
  const { data: stores } = useSWR<Store[]>(swrKey.stores)
  const { data: map } = useSWR<naver.maps.Map>(swrKey.map)

  const { setMap } = useMap()
  const { setCurrentStore } = useStore()

  const setRandomStore = () => {
    if (!stores || !map) {
      return
    }

    const randomStore = stores?.[Math.floor(Math.random() * stores.length)]
    setCurrentStore(randomStore)
    setMap({
      map,
      position: {
        latitude: randomStore.coordinates[0],
        longitude: randomStore.coordinates[1],
      },
    })
  }

  return { setRandomStore }
}

export default useRandomStore
