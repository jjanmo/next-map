import useMap from '@hooks/useMap'
import Spinner from './Spinner'

interface Props {
  isLoading: boolean
  clearCurrentStore: () => void
}

export default function Map({ isLoading, clearCurrentStore }: Props) {
  useMap({ handler: clearCurrentStore })

  return (
    <>
      {isLoading && (
        <div className="w-full h-full flex justify-center items-center absolute top-0 left-0 z-10">
          <Spinner size={100} />
        </div>
      )}
      <div id="map" style={{ height: '100%' }}></div>
    </>
  )
}
