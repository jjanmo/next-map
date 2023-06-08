import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { BsShare } from 'react-icons/bs';
import { VscFeedback } from 'react-icons/vsc';

export default function Header() {
  const { pathname } = useRouter();

  return (
    <div className="w-full h-24 flex justify-between items-center fixed top-0 left-0 z-10">
      <div className="relative w-24 h-24 ml-4 flex">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src={'/nav-icon.png'}
            alt="logo"
            width={80}
            height={80}
            priority
          />
        </Link>
      </div>

      {pathname === '/' && (
        <div className="flex">
          <BsShare
            size="45"
            color="white"
            className="p-3 mx-1 shadow-lg rounded-xl bg-blue-300 "
          />
          <Link href="feedback">
            <VscFeedback
              size="45"
              color="white"
              className="p-3 ml-1 mr-4 shadow rounded-xl bg-blue-300"
            />
          </Link>
        </div>
      )}
    </div>
  );
}
