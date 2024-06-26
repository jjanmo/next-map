import Layout from '@components/Layout'
import { Store } from '@/types/store'
import axios from 'axios'
import useStores from '@hooks/useStores'
import { useEffect } from 'react'
import MapSection from '@components/MapSection'

interface Props {
  stores: Store[]
}

export default function Home({ stores }: Props) {
  const { initializeStores } = useStores()

  useEffect(() => {
    initializeStores(stores)
  }, [initializeStores, stores])

  return (
    <Layout>
      <main className="w-full h-full ">
        <MapSection />
      </main>
    </Layout>
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
