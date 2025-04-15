import useMap from '@hooks/useMap'
import Image from 'next/image'
import Link from 'next/link'
import { BsShare } from 'react-icons/bs'
import { VscFeedback } from 'react-icons/vsc'
import { toast } from 'react-toastify'

export default function Sidebar() {
  const { getMapOption } = useMap()

  const handleShareBtnClick = () => {
    getMapOption()

    //@TODO 현재 중앙 좌표를 쿼리로 전달하는 URL 생성
    toast.success('링크가 복사되었어요')
  }

  return (
    <header className="w-16 h-full flex flex-col absolute top-0 left-0 z-10 bg-[#FDF7E9] opacity-80 shadow-md">
      <Link href="/" className="flex justify-center items-center relative w-16 h-16 my-4">
        <Image src={'/logo.png'} priority fill alt="logo" />
      </Link>

      <ul className="flex flex-col justify-center items-center gap-4">
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
