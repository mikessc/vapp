'use client';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import FooterBGPattern from '@/components/FooterBGPattern';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div className="welcome mx-auto px-4 py-56 max-w-screen-lg justify">
        <div className="welcome__content flex">
          <div className="w-2/12"></div>
          <div className="w-8/12">
            <h2 className='text-center user_page_title'>¡Bienvenido!</h2>
            <div className="welcome__buttons_container flex flex-col gap-6 py-8">
              <Button
                radius='sm'
                size="lg"
                className='text-black shrink-1 py-8 bg-primary'
                
                fullWidth
                onClick={() => router.push('/login')}
              ><b>Ingresar Con Mi Cuenta</b></Button>
              <Button
                radius='sm'
                size="lg"
                className='text-black text-lg shrink-1 py-8 bg-white'
                
                fullWidth
                onClick={() => router.push('/register')}
              ><b>Registrar Cuenta</b></Button>
            </div>
          </div>
        </div>
      </div>
      <FooterBGPattern />
      </>
  );
}
