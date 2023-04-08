import Image from 'next/image';
import Link from 'next/link';
import { BsShare } from 'react-icons/bs';
import { VscFeedback } from 'react-icons/vsc';

export default function Header() {
  return (
    <div className="w-full h-24 flex justify-between items-center bg-blue-100">
      <div className="relative w-24 h-24 ml-4">
        <Link href="/">
          <Image src={'/cute.png'} alt="logo" fill />
        </Link>
      </div>
      <h1></h1>

      <div className="flex">
        <BsShare
          size="45"
          color="white"
          className="p-3 mx-2 shadow-lg rounded-xl bg-blue-300 "
        />
        <Link href="feedback">
          <VscFeedback
            size="45"
            color="white"
            className="p-3 ml-2 mr-4 shadow rounded-xl bg-blue-300"
          />
        </Link>
      </div>
    </div>
  );
}
