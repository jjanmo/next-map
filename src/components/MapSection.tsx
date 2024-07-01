import useSWR from 'swr'
import Map from './Map'
import { swrKey } from '@constants/swr'
import { Store } from '@/types/store'
import Marker from './Marker'
import { generateStoreMarkerImage } from 'src/utils'
import useStore from '@hooks/useStore'
import { useCallback } from 'react'

export default function MapSection() {
  const { data: stores } = useSWR<Store[]>(swrKey.stores)
  const { data: map } = useSWR<naver.maps.Map>(swrKey.map)
  const { data: currentStore } = useSWR<Store>(swrKey.currentStore)

  const { setCurrentStore } = useStore()

  const handleStoreClick = useCallback(
    (store: Store) => () => {
      setCurrentStore(store)
    },
    [setCurrentStore]
  )

  return (
    <>
      <Map isLoading={!map} />
      {map &&
        stores &&
        stores.map((store) => {
          const { nid, coordinates, season } = store
          const isSelected = currentStore?.nid === nid

          return (
            <Marker
              key={nid}
              map={map}
              lat={coordinates[0]}
              lng={coordinates[1]}
              icon={generateStoreMarkerImage(season, isSelected)}
              onClick={handleStoreClick(store)}
            />
          )
        })}
    </>
  )
}
