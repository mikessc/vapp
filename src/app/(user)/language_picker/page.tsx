'use client';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import FooterBGPattern from '@/components/FooterBGPattern';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div className="language_picker mx-auto px-4 pt-56 max-w-screen-lg justify">
        <div className="circular_bg_top"></div>
        <div className="language_picker__content flex">
          <div className="w-2/12"></div>
          <div className="w-8/12">
            <h2 className='text-center user_page_title'>Seleccione su idioma</h2>
            <div className="language_picker__buttons_container flex flex-col gap-6 py-8">
              <Button
                radius='sm'
                size="lg"
                className='text-black text-lg shrink-1 py-8 bg-white'
                
                fullWidth
                onClick={() => router.push('/welcome')}
              ><b>Español</b></Button>
              <Button
                radius='sm'
                size="lg"
                className='text-black text-lg shrink-1 py-8 bg-white'
                
                fullWidth
                onClick={() => router.push('/welcome')}
              ><b>Español</b></Button>
              <Button
                radius='sm'
                size="lg"
                className='text-black text-lg shrink-1 py-8 bg-white'
                
                fullWidth
                onClick={() => router.push('/welcome')}
              ><b>Español</b></Button>
            </div>
          </div>
        </div>
      </div>
      <FooterBGPattern />
    </>
  );
}
