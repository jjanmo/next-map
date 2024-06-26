import Layout from '@components/Layout'
import { Store } from '@/types/store'
import axios from 'axios'
import Map from '@components/Map'
import useStores from '@hooks/useStores'
import { useEffect } from 'react'

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
      <main style={{ width: '100%', height: '100%' }}>
        <Map />
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
