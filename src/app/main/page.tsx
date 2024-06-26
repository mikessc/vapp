'use client';
import { useRouter } from 'next/navigation';
import { CircularProgress  } from '@nextui-org/react';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();
  
  setTimeout(() => {
    router.push('/language_picker');
  }, 3000);

  return (
    <div className="splash flex flex-col gap-6 justify-center items-center h-screen">
      <Image
        src="/assets/logo.svg"
        alt="logo"
        width={100}
        height={100}
        className='w-[300px] h-auto'
        priority
      />
      <CircularProgress
        aria-label="Loading..."
        size="lg"
        color="primary"
        label="Loading..."   
      />
    </div>
  );
}
