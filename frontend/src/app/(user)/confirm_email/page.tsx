'use client';
import { useState } from 'react';
import { 
  Button, 
  Input, 
  Link, 
  CircularProgress, 
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import FooterBGPattern from '@/components/FooterBGPattern';
import IconContainer from '@/components/IconContainer';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();
  
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'mailto:'
    }
  };

  return (
    <>
      <div className="register mx-auto px-8 pt-10 pb-16 max-w-screen-lg box-border justify">
        <div className="check_email__content flex flex-col content_box_container relative">
          <IconContainer classes="mx-auto mb-8" icon="check-circle" />
          <h2 className='text-center user_page_title'>Confirma tu cuenta para continuar</h2>
          <p className="text-center text-gray">
            Enviamos una link de verificación a tu email
          </p>
          <div className="check_email__form_container flex flex-col gap-6 pt-28">
            <div className="flex">
              <div className="w-2/12"></div>
              <div className="w-8/12">
                <Button
                  radius='sm'
                  size="lg"
                  className='text-black text-lg shrink-1 py-8 bg-primary font-bold'
                  
                  fullWidth
                  onClick={handleClick}
                >Ir al Email</Button>
              </div>
            </div>
          </div>
          <FooterBGPattern position="absolute" bottom="40px"/>
        </div>
      </div>
    </>
  );
}
