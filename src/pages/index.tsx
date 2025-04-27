import { useCallback, useEffect, useRef } from 'react'
import axios from 'axios'
import useStores from '@hooks/useStores'
import { Store } from '@/types/store'
import MapSection from '@components/MapSection'
import Sidebar from '@components/Sidebar'
import Drawer, { DrawerRef } from '@components/Drawer'
import DetailStore from '@components/DetailStore'
import useSWR from 'swr'
import { swrKey } from '@constants/swr'

interface Props {
  stores: Store[]
}

export default function Home({ stores }: Props) {
  const drawerRef = useRef<DrawerRef>(null)
  const { data: currentStore } = useSWR<Store>(swrKey.currentStore)

  const { initializeStores } = useStores()

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
    <div className="relative w-screen h-screen bg-slate-100">
      <Sidebar />
      <Drawer ref={drawerRef}>
        <DetailStore store={currentStore} />
      </Drawer>
      <main className="w-full h-full ">
        <MapSection onOpenDrawer={handleDrawerOpen} onCloseDrawer={handleDrawerClose} />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const response = await axios.get<{ stores: Store[] }>(`${process.env.NEXT_API_URL}/api/stores`)

  return {
    props: {
      stores: response.data.stores,
    },
  }
}
