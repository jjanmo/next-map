import { DrawerRef, Store } from '@/types/store'
import axios from 'axios'
import useStores from '@hooks/useStores'
import { useCallback, useEffect, useRef } from 'react'
import MapSection from '@components/MapSection'
import Sidebar from '@components/Sidebar'
import Drawer from '@components/Drawer'
import DetailStore from '@components/DetailStore'

interface Props {
  stores: Store[]
}

export default function Home({ stores }: Props) {
  const { initializeStores } = useStores()
  const toggleRef = useRef<DrawerRef>(null)

  useEffect(() => {
    initializeStores(stores)
  }, [initializeStores, stores])

  const handleDrawerToggle = useCallback(() => {
    toggleRef.current?.toggle()
  }, [toggleRef])

  return (
    <div className="relative w-screen h-screen bg-slate-100">
      <Sidebar />
      <Drawer ref={toggleRef}>
        <DetailStore />
      </Drawer>
      <main className="w-full h-full ">
        <MapSection onDrawerToggle={handleDrawerToggle} />
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
