import { swrKey } from '@constants/swr'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsShare } from 'react-icons/bs'
import { VscFeedback } from 'react-icons/vsc'
import { toast } from 'react-toastify'
import useSWR from 'swr'

export default function Header() {
  const { pathname } = useRouter()
  const { data: currentStore } = useSWR(swrKey.currentStore)

  const handleShareBtnClick = () => {
    if (!currentStore) {
      toast.error('공유할 맛집을 선택해주세요')
      return
    }
    //@TODO
    toast.success('링크가 복사되었어요')
  }

  return (
    <div className="w-full h-16 flex justify-between items-center absolute top-0 left-0 z-10 bg-slate-100 opacity-80 shadow-md">
      <div className="relative w-24 h-24 ml-4 flex">
        <Link href="/" className="flex justify-center items-center">
          <Image src={'/nav-icon.png'} alt="logo" width={50} height={50} priority />
        </Link>
      </div>

      {pathname === '/' && (
        <div className="flex">
          <button onClick={handleShareBtnClick}>
            <BsShare size="45" color="white" className="p-3 mx-1 rounded-xl bg-blue-300 " />
          </button>
          <Link href="feedback">
            <VscFeedback size="45" color="white" className="p-3 ml-1 mr-4 rounded-xl bg-blue-300" />
          </Link>
        </div>
      )}
    </div>
  )
}
