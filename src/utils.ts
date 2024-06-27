import { NUMBER_OF_MARKERS, SCALED_MARKER_HEIGHT, SCALED_MARKER_WIDTH } from '@constants/map'

export const generateStoreMarkerImage = (index: number) => {
  return {
    url: '/markers.png',
    size: new naver.maps.Size(SCALED_MARKER_WIDTH, SCALED_MARKER_HEIGHT),
    origin: new naver.maps.Point(SCALED_MARKER_WIDTH * index, 0),
    scaledSize: new naver.maps.Size(SCALED_MARKER_WIDTH * NUMBER_OF_MARKERS, SCALED_MARKER_HEIGHT),
  }
}
