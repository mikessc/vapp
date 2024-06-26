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
  const [showLoading, setShowLoading] = useState(false);
  const [showInput, setShowInput] = useState(true);

  return (
    <>
      <div className="new_password mx-auto px-8 pt-36 pb-16 max-w-screen-lg box-border h-[100vh] justify">
        <div className="new_password__content flex flex-col content_box_container relative">
          <IconContainer classes="mx-auto mb-8" icon="lock" />
          <h2 className='text-center user_page_title'>Contraseña nueva</h2>
          <p className="text-center text-gray">
            Ingresa una nueva contraseña para tu cuenta
            {showLoading && (<CircularProgress
              aria-label="Loading..."
              size="lg"
              color="primary"
              className='mx-auto my-4'
            />)}
          </p>
          <div className="new_password__form_container flex flex-col gap-6 pt-8">
            {showInput && (<Input
              key="outside"
              label="Contraseña"
              type="password"
              className="text-black label-black"
              labelPlacement="outside"
              placeholder="Digite su contraseña"
              variant="bordered"
              fullWidth
              radius="sm"
            />)}
            {showInput && (<Input
              key="outside"
              label="Confirmar Contraseña"
              type="password"
              className="text-black label-black"
              labelPlacement="outside"
              placeholder="Digite su contraseña"
              variant="bordered"
              fullWidth
              radius="sm"
            />)}
            <div className="flex">
              <div className="w-2/12"></div>
              <div className="w-8/12">
                <Button
                  radius='sm'
                  size="lg"
                  className='text-black text-lg shrink-1 py-8 bg-primary font-bold'
                  
                  fullWidth
                  onClick={() => {
                    setShowLoading(true);
                    setShowInput(false);
                    setTimeout(() => {
                      setShowLoading(false);
                      router.push('/check_email');
                    }, 3000)
                  }}
                >Cambiar Contraseña</Button>
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
