import useSWR from 'swr'
import Map from './Map'
import { swrKey } from '@constants/swr'
import { Store } from '@/types/store'
import Marker from './Marker'
import { generateStoreMarkerImage } from 'src/utils'

export default function MapSection() {
  const { data: stores } = useSWR<Store[]>(swrKey.stores)
  const { data: map } = useSWR<naver.maps.Map>(swrKey.map)

  return (
    <>
      <Map isLoading={!map} />
      {map &&
        stores &&
        stores.map(({ nid, coordinates, season }) => (
          <Marker
            key={nid}
            map={map}
            lat={coordinates[0]}
            lng={coordinates[1]}
            icon={generateStoreMarkerImage(season)}
          />
        ))}
    </>
  )
}
