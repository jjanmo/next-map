import { Store } from '@/types/store'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { CiLocationOn, CiPhone } from 'react-icons/ci'
import { SiNaver } from 'react-icons/si'
import EmptyDetail from './EmptyDetail'
import { BsShare } from 'react-icons/bs'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

interface Props {
  store?: Store
}

const DetailStore: FC<Props> = ({ store }) => {
  const router = useRouter()

  if (!store) return <EmptyDetail />

  const isDetailPage = router.pathname === '/[store]'

  const { nid, name, address, phone, menus, images, description } = store

  const handleShareBtnClick = () => {
    navigator.clipboard.writeText(`${location.origin}/${name}`)
    toast.success('가게 링크가 복사되었어요')
  }

  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">{name}</div>
        {!isDetailPage && (
          <button
            className="cursor-pointer rounded active:scale-90 transition transform duration-100"
            onClick={handleShareBtnClick}
          >
            <BsShare size="32" className="p-2 rounded-xl" />
          </button>
        )}
      </div>
      <div className="flex gap-2 w-full">
        {images.map((image, index) => (
          <div key={image} className="relative w-[120px] h-[80px]">
            <Image
              src={image}
              className="object-cover"
              fill
              sizes="120px"
              alt={`${name}-${index + 1}`}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
              priority
            />
          </div>
        ))}
      </div>
      <div>
        <div className="font-semibold">설명</div>
        <div className="text-sm">{description}</div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold">기본정보</div>
        <div className="flex items-center gap-2 text-sm">
          <CiLocationOn size={16} />
          <span>{address}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <CiPhone size={16} />
          <span>{phone}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-[#00DE5A]">
          <SiNaver size={14} />
          <Link href={`https://pcmap.place.naver.com/restaurant/${nid}/home`} target="_blank">
            네이버 상세정보
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-semibold">메뉴</div>
        {menus.map((menu) => (
          <div key={menu.name} className="flex items-center justify-between text-sm">
            <span>{menu.name}</span>
            <span>{menu.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailStore
