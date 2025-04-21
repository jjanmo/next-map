import { Store } from '@/types/store'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  store: Store
}

const DetailStore = ({ store }: Props) => {
  const { nid, name, address, phone, menus, images } = store

  return (
    <div>
      <div>{name}</div>
      <div>
        {images.map((image, index) => (
          <Image key={image} src={image} width={100} height={100} alt={`${name}-${index + 1}`} />
        ))}
      </div>
      <div>
        <div>기본정보</div>
        <div>{address}</div>
        <div>{phone}</div>
        <Link href={`https://pcmap.place.naver.com/restaurant/${nid}/home`}>네이버 상세정보</Link>
      </div>
      <div>메뉴</div>
      {menus.map((menu) => (
        <div key={menu.name}>
          <span>{menu.name}</span>
          <span>{menu.price}</span>
        </div>
      ))}
    </div>
  )
}

export default DetailStore
