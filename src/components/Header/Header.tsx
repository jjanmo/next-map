import logo from 'logo.webp';
import Image from 'next/image';

export default function Header() {
  return (
    <div>
      <Image src={logo} alt="logo" width={100} height={100} />
    </div>
  );
}
