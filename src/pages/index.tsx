import { useCallback, useEffect, useRef } from 'react'
import axios, { AxiosError } from 'axios'
import useStores from '@hooks/useStores'
import { Store } from '@/types/store'
import MapSection from '@components/MapSection'
import Drawer, { DrawerRef } from '@components/Drawer'
import DetailStore from '@components/DetailStore'
import useSWR from 'swr'
import { swrKey } from '@constants/swr'
import Navbar from '@components/Navbar'
import useMediaQuery from '@hooks/useMediaQuery'
import BottomSheet from '@components/BottomSheet'
interface Props {
  stores: Store[]
}

export default function Home({ stores }: Props) {
  const drawerRef = useRef<DrawerRef>(null)
  const { data: currentStore } = useSWR<Store>(swrKey.currentStore)

  const { initializeStores } = useStores()
  const { isDesktop } = useMediaQuery()

  useEffect(() => {
    initializeStores(stores)
  }, [initializeStores, stores])

  const handleDrawerOpen = useCallback(() => {
    drawerRef.current?.drawerOpen()
  }, [drawerRef])

  const handleDrawerClose = useCallback(() => {
    drawerRef.current?.drawerClose()
  }, [drawerRef])

  return (
    <div className="relative w-screen h-screen bg-slate-100 overflow-hidden">
      <Navbar />

      <main className="w-full h-full ">
        {isDesktop && (
          <Drawer ref={drawerRef}>
            <DetailStore store={currentStore} />
          </Drawer>
        )}
        <MapSection onOpenDrawer={handleDrawerOpen} onCloseDrawer={handleDrawerClose} />
        {!isDesktop && <BottomSheet />}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  try {
    const response = await axios.get(`${process.env.NEXT_API_URL}/api/stores`)
    return {
      props: {
        stores: response.data.stores,
      },
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(`오류 코드: ${error.code}, 메시지: ${error.message}`)
    } else {
      console.error('오류 타입:', error)
    }

    return {
      notFound: true,
    }
  }
}
