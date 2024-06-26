import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { BsShare } from 'react-icons/bs'
import { VscFeedback } from 'react-icons/vsc'

export default function Header() {
  const { pathname } = useRouter()

  return (
    <div className="w-full h-16 flex justify-between items-center absolute top-0 left-0 z-10 bg-slate-100 opacity-80 shadow-md">
      <div className="relative w-24 h-24 ml-4 flex">
        <Link href="/" className="flex justify-center items-center">
          <Image src={'/nav-icon.png'} alt="logo" width={50} height={50} priority />
        </Link>
      </div>

      {pathname === '/' && (
        <div className="flex">
          <BsShare size="45" color="white" className="p-3 mx-1 rounded-xl bg-blue-300 " />
          <Link href="feedback">
            <VscFeedback size="45" color="white" className="p-3 ml-1 mr-4 rounded-xl bg-blue-300" />
          </Link>
        </div>
      )}
    </div>
  )
}
