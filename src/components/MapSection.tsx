import useSWR from 'swr'
import Map from './Map'
import { swrKey } from '@constants/swr'
import { Store } from '@/types/store'
import Marker from './Marker'
import useStore from '@hooks/useStore'

export default function MapSection() {
  const { data: stores } = useSWR<Store[]>(swrKey.stores)
  const { data: map } = useSWR<naver.maps.Map>(swrKey.map)
  const { data: currentStore } = useSWR<Store>(swrKey.currentStore)

  const { setCurrentStore, clearCurrentStore } = useStore()

  return (
    <>
      <Map isLoading={!map} clearCurrentStore={clearCurrentStore} />
      {map &&
        stores &&
        stores.map((store) => {
          return (
            <Marker
              key={store.nid}
              store={store}
              map={map}
              onClick={() => setCurrentStore(store)}
            />
          )
        })}
      {map && currentStore && (
        <Marker store={currentStore} map={map} onClick={clearCurrentStore} isSelected />
      )}
    </>
  )
}
