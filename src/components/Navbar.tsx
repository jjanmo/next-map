import { swrKey } from '@constants/swr'
import useMap from '@hooks/useMap'
import useMediaQuery from '@hooks/useMediaQuery'
import Image from 'next/image'
import Link from 'next/link'
import { BsShare } from 'react-icons/bs'
import { VscFeedback } from 'react-icons/vsc'
import { toast } from 'react-toastify'
import useSWR from 'swr'

export default function Navbar() {
  const { data: map } = useSWR<naver.maps.Map>(swrKey.map)
  const { getMapOption, setMap: resetMap } = useMap()
  const { isMobile } = useMediaQuery()

  const handleLogoClick = () => {
    if (!map) return

    resetMap({ map, isReset: true })
  }

  const handleShareBtnClick = () => {
    if (!map) return

    const { latitude, longitude, zoom } = getMapOption(map)
    const url = `${location.origin}?lat=${latitude}&lng=${longitude}&zoom=${zoom}`
    navigator.clipboard.writeText(url)
    toast.success('현재 위치가 복사되었어요')
  }

  if (isMobile) {
    return (
      <header className="w-full h-12 flex absolute top-0 left-0 z-20 bg-white shadow-md">
        <div className="w-full flex justify-between items-center">
          <Link
            href="/"
            className="flex justify-center items-center relative w-[54px] h-[50px]"
            onClick={handleLogoClick}
          >
            <Image src={'/logo.png'} priority fill sizes="48px" alt="logo" />
          </Link>

          <div className="flex gap-4 pr-4">
            <button title="링크 공유" onClick={handleShareBtnClick}>
              <BsShare size="32" color="white" className="p-2 rounded-xl bg-[#E37E2E]" />
            </button>
            <Link href="feedback" title="피드백">
              <VscFeedback size="32" color="white" className="p-2 rounded-xl bg-[#E37E2E]" />
            </Link>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="w-16 h-full flex flex-col absolute top-0 left-0 z-20 bg-[#FDF7E9] shadow-md border-r-[1px] border-[#E37E2E]">
      <ul className="flex flex-col justify-start items-center gap-4 h-1/2">
        <li className="my-4">
          <Link
            href="/"
            className="flex justify-center items-center relative w-16 h-16"
            onClick={handleLogoClick}
          >
            <Image src={'/logo.png'} priority fill sizes="64px" alt="logo" />
          </Link>
        </li>
        <li>
          <button onClick={handleShareBtnClick} title="링크 공유">
            <BsShare size="40" color="white" className="p-2 rounded-xl bg-[#E37E2E]" />
          </button>
        </li>
        <li>
          <Link href="feedback" title="피드백">
            <VscFeedback size="40" color="white" className="p-2 rounded-xl bg-[#E37E2E]" />
          </Link>
        </li>
      </ul>
    </header>
  )
}
