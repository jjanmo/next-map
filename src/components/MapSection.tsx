import { FC } from 'react'
import useSWR from 'swr'
import Map from './Map'
import { swrKey } from '@constants/swr'
import { Store } from '@/types/store'
import Marker from './Marker'
import useStore from '@hooks/useStore'

interface Props {
  onOpenDrawer: () => void
  onCloseDrawer: () => void
}

const MapSection: FC<Props> = ({ onOpenDrawer, onCloseDrawer }) => {
  const { data: stores } = useSWR<Store[]>(swrKey.stores)
  const { data: map } = useSWR<naver.maps.Map>(swrKey.map)
  const { data: currentStore } = useSWR<Store>(swrKey.currentStore)

  const { setCurrentStore, clearCurrentStore } = useStore()

  const handleMarkerClick = (store: Store) => () => {
    setCurrentStore(store)
    onOpenDrawer()
  }

  const handleMarkerClickForClear = () => {
    clearCurrentStore()
    onCloseDrawer()
  }

  return (
    <>
      <Map isLoading={!map} clearCurrentStore={clearCurrentStore} />
      {map &&
        stores &&
        stores.map((store) => {
          return (
            <Marker key={store.nid} store={store} map={map} onClick={handleMarkerClick(store)} />
          )
        })}
      {map && currentStore && (
        <Marker store={currentStore} map={map} onClick={handleMarkerClickForClear} isSelected />
      )}
    </>
  )
}

export default MapSection
