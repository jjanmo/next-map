import { useRouter } from 'next/router'

const Store = () => {
  const router = useRouter()
  const { store } = router.query

  return <div>{store} 페이지 입니다.</div>
}

export default Store
