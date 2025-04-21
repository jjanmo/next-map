import { Store } from '@/types/store'
import axios from 'axios'
import useStores from '@hooks/useStores'
import { useEffect } from 'react'
import MapSection from '@components/MapSection'
import Sidebar from '@components/Sidebar'
import Drawer from '@components/Drawer'
import DetailStore from '@components/DetailStore'

interface Props {
  stores: Store[]
}

export default function Home({ stores }: Props) {
  const { initializeStores } = useStores()

  useEffect(() => {
    initializeStores(stores)
  }, [initializeStores, stores])

  return (
    <div className="relative w-screen h-screen bg-slate-100">
      <Sidebar />
      <Drawer>
        <DetailStore />
      </Drawer>
      <main className="w-full h-full ">
        <MapSection />
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
