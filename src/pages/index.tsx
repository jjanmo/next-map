import Layout from '@components/Layout';
import MapSection from '@components/MapSection';

export default function Home() {
  return (
    <Layout>
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
      </main>
    </Layout>
  );
}
