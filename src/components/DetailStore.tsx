import { Store } from '@/types/store'
import { swrKey } from '@constants/swr'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import { CiLocationOn, CiPhone } from 'react-icons/ci'
import { SiNaver } from 'react-icons/si'

const DetailStore = () => {
  const { data: currentStore } = useSWR<Store>(swrKey.currentStore)

  /** @TODO null 대신 현재 선택된 가게가 없을 경우 디폴트 UI */
  if (!currentStore) return null

  const { nid, name, address, phone, menus, images, description } = currentStore

  return (
    <div className="flex flex-col p-4 gap-4">
      <div className="text-lg font-semibold">{name}</div>
      <div className="flex gap-2 relative max-w-[120px] h-[80px]">
        {images.map((image, index) => (
          <Image
            key={image}
            src={image}
            className="object-contain"
            fill
            sizes="120px"
            alt={`${name}-${index + 1}`}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
            priority
          />
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
