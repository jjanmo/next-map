import { NextPage, GetStaticProps } from 'next'
import { Store as StoreType } from '@/types/store'

interface Props {
  store: StoreType
}

const Store: NextPage<Props> = ({ store }) => {
  return <div>{store.name} 페이지 입니다.</div>
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
