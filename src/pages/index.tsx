import Layout from '@components/Layout';
import MapSection from '@components/MapSection';
import { Store } from '@/types/store';
import axios from 'axios';
import { useEffect } from 'react';

interface Props {
  stores: Store[];
}

export default function Home({ stores }: Props) {
  console.log(stores);
  return (
    <Layout>
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await axios.get<{ stores: Store[] }>(
    `${process.env.NEXT_API_URL}/api/stores`
  );

  return {
    props: {
      stores: response.data.stores,
    },
  };
}
