import { NextPage, GetStaticProps } from 'next'
import { Store as StoreType } from '@/types/store'
import DetailStore from '@components/DetailStore'

interface Props {
  store: StoreType
}

const Store: NextPage<Props> = ({ store }) => {
  return (
    <div className="flex flex-col gap-4 max-w-lg h-screen mx-auto bg-[#faf5eb] p-4">
      <DetailStore store={store} />
    </div>
  )
}

export default Store

export const getStaticPaths = async () => {
  const paths = (await import('../../public/stores.json')).default.map((store) => ({
    params: { store: store.name },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const targetStore = (await import('../../public/stores.json')).default.find(
    (store) => store.name === params?.store
  )

  if (!targetStore) {
    return {
      notFound: true,
    }
  }

  return {
    props: { store: targetStore },
  }
}
