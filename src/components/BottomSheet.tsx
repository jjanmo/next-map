import { Store } from '@/types/store'
import { swrKey } from '@constants/swr'
import Image from 'next/image'
import { BsShare } from 'react-icons/bs'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { toast } from 'react-toastify'
import useSWR from 'swr'
import { motion } from 'motion/react'
import { useState } from 'react'
import { CiPhone } from 'react-icons/ci'
import { CiLocationOn } from 'react-icons/ci'
import Link from 'next/link'
import { SiNaver } from 'react-icons/si'

const BottomSheet = () => {
  const [isFullPage, setIsFullPage] = useState(false)
  const { data: currentStore } = useSWR<Store>(swrKey.currentStore)

  const storeName = currentStore?.name || <div className="pt-3">매장을 선택해주세요</div>
  const borderRadiusStyle = {
    default: 'rounded-t-3xl',
    fullPage: 'rounded-t-none',
  }

  const handleShareBtnClick = () => {
    navigator.clipboard.writeText(`${location.origin}/${currentStore?.name}`)
    toast.success('가게 링크가 복사되었어요')
  }

  const handleArrowUpBtnClick = () => {
    if (!currentStore) {
      return
    }

    setIsFullPage((prev) => !prev)
  }

  return (
    <motion.div
      className={`flex flex-col z-[101] absolute bottom-0 left-0 w-full py-2 px-3 bg-white
        ${borderRadiusStyle[isFullPage ? 'fullPage' : 'default']}
        border-t-[1px]`}
      animate={{
        height: isFullPage ? '100vh' : currentStore ? '160px' : '62px',
        transition: { duration: 0.3 },
      }}
    >
      {currentStore && (
        <div className="flex justify-center items-center animate-bounce cursor-pointer">
          <button onClick={handleArrowUpBtnClick}>
            {isFullPage ? (
              <IoIosArrowDown size={20} color="#E37E2E" />
            ) : (
              <IoIosArrowUp size={20} color="#E37E2E" />
            )}
          </button>
        </div>
      )}

      <div className="w-full text-left flex justify-between items-center">
        <span>{storeName}</span>
        {currentStore && (
          <button
            className="rounded active:scale-90 transition transform duration-100 cursor-pointer"
            onClick={handleShareBtnClick}
          >
            <BsShare size="32" className="p-2 rounded-xl" />
          </button>
        )}
      </div>

      {currentStore && (
        <>
          <div className="flex gap-2 w-full mt-2">
            {currentStore.images.map((image, index) => (
              <div key={image} className="relative w-[120px] h-[80px]">
                <Image
                  src={image}
                  className="object-cover"
                  fill
                  sizes="120px"
                  alt={`${storeName}-${index + 1}`}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO0WhFsDwADzwF2mLYSJgAAAABJRU5ErkJggg=="
                  priority
                />
              </div>
            ))}
          </div>

          <div className="h-1 bg-gradient-to-r from-[#E37E2E] to-[#FFD580] w-full my-4"></div>

          {isFullPage && (
            <>
              <div>
                <div className="font-semibold">설명</div>
                <div className="text-sm">{currentStore.description}</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="font-semibold">기본정보</div>
                <div className="flex items-center gap-2 text-sm">
                  <CiLocationOn size={16} />
                  <span>{currentStore.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CiPhone size={16} />
                  <span>{currentStore.phone}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-[#00DE5A]">
                  <SiNaver size={14} />
                  <Link
                    href={`https://pcmap.place.naver.com/restaurant/${currentStore.nid}/home`}
                    target="_blank"
                  >
                    네이버 상세정보
                  </Link>
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-[#E37E2E] to-[#FFD580] w-full my-4"></div>

              <div className="flex flex-col gap-1">
                <div className="font-semibold">메뉴</div>
                {currentStore.menus.map((menu) => (
                  <div key={menu.name} className="flex items-center justify-between text-sm">
                    <span>{menu.name}</span>
                    <span>{menu.price}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </motion.div>
  )
}

export default BottomSheet
