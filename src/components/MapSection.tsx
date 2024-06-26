import useSWR from 'swr'
import Map from './Map'
import { swrKey } from '@constants/swr'

export default function MapSection() {
  const { data: stores } = useSWR(swrKey.stores)
  const { data: map } = useSWR(swrKey.map)

  return (
    <>
      <Map isLoading={!map} />
    </>
  )
}
