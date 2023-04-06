import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/c');
  };

  useEffect(() => {
    router.prefetch('/c');
  }, [router]);

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>Hello NextJS</h1>
      <ul
        style={{
          width: '50%',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <li>
          <Link href="/a">A component</Link>
        </li>
        <li>
          <Link href="/b">B component</Link>
        </li>
        <button onClick={handleClick}>C component</button>
      </ul>
    </div>
  );
}
