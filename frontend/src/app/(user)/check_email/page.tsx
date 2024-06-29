'use client';
import { useState } from 'react';
import { 
  Button, 
  Input, 
  Link, 
  CircularProgress, 
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import FooterBGPattern from '@/components/FooterBGPattern';
import IconContainer from '@/components/IconContainer';
import Image from 'next/image';

export default function Page() {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'mailto:'
    }
  };

  return (
    <>
      <div className="check_email mx-auto px-8 pt-36 pb-16 max-w-screen-lg box-border h-[100vh] justify">
        <div className="check_email__content flex flex-col content_box_container relative">
          <IconContainer classes="mx-auto mb-8" icon="check-circle" />
          <h2 className='text-center user_page_title'>Revisa tu email</h2>
          <p className="text-center text-gray">
            Te enviamos una nueva contraseña a tu correo
          </p>
          <div className="check_email__form_container flex flex-col gap-6 pt-8">
            <div className="flex">
              <div className="w-2/12"></div>
              <div className="w-8/12">
                <Button
                  radius='sm'
                  size="lg"
                  className='text-black text-lg shrink-1 py-8 bg-primary font-bold'
                  
                  fullWidth
                  onClick={handleClick}
                >Ver mi Email</Button>
              </div>
            </div>
            <p className="text-center text-black">
              <Link href="/login" className="font-semibold text-blue">
                <Image
                  src="/assets/icons/arrow-left-blue.svg"
                  alt="regresar"
                  width={22}
                  height={22}
                  priority
                /> Regresar al Inicio
              </Link>
            </p>
          </div>
          <FooterBGPattern position="absolute" bottom="40px"/>
        </div>
      </div>
    </>
  );
}
