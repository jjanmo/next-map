import { FC } from 'react'
import useSWR from 'swr'
import Map from './Map'
import { swrKey } from '@constants/swr'
import { Store } from '@/types/store'
import Marker from './Marker'
import useStore from '@hooks/useStore'

interface Props {
  onDrawerToggle: () => void
}

const MapSection: FC<Props> = ({ onDrawerToggle }) => {
  const { data: stores } = useSWR<Store[]>(swrKey.stores)
  const { data: map } = useSWR<naver.maps.Map>(swrKey.map)
  const { data: currentStore } = useSWR<Store>(swrKey.currentStore)

  const { setCurrentStore, clearCurrentStore } = useStore()

  const handleMarkerClick = (store: Store) => () => {
    setCurrentStore(store)
    onDrawerToggle()
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
        <Marker store={currentStore} map={map} onClick={clearCurrentStore} isSelected />
      )}
    </>
  )
}

export default MapSection
