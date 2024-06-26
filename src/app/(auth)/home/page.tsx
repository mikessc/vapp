'use client';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import FooterBGPattern from '@/components/FooterBGPattern';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div className="language_picker mx-auto px-4 py-16 max-w-screen-lg justify">
        <div className="circular_bg_title"></div>
        <div className="language_picker__content flex">
          <div className="w-2/12"></div>
          <div className="w-8/12">
            <h2 className='text-center user_page_title'>¡Hola Natalia!</h2>
            <div className="language_picker__buttons_container flex flex-col gap-6 py-8 mt-16">
              <Button
                radius='sm'
                size="lg"
                color="primary"
                className='text-black text-lg shrink-1 py-8 font-bold'
                
                fullWidth
                onClick={() => router.push('/anesthesia/register')}
                startContent={<Image
                  src="/assets/icons/activity-heart.svg"
                  alt="actividad"
                  width={24}
                  height={24}
                  priority
                />}
              >Nueva Hoja de Registro</Button>
              <Button
                radius='sm'
                size="lg"
                
                className='text-black text-lg bg-white shrink-1 py-8 font-bold'
                
                fullWidth
                onClick={() => router.push('/hospitals/search')}
                startContent={<Image
                  src="/assets/icons/building.svg"
                  alt="hospital"
                  width={24}
                  height={24}
                  priority
                />}
              >Registrar Hospital</Button>
              <Button
                radius='sm'
                size="lg"
                
                className='text-black text-lg bg-white shrink-1 py-8 font-bold'
                
                fullWidth
                onClick={() => router.push('/welcome')}
                startContent={<Image
                  src="/assets/icons/edit.svg"
                  alt="editar"
                  width={24}
                  height={24}
                  priority
                />}
              >Registrar Paciente</Button>
              <Button
                radius='sm'
                size="lg"
                
                className='text-black text-lg bg-white shrink-1 py-8 font-bold'
                
                fullWidth
                onClick={() => router.push('/welcome')}
                startContent={<Image
                  src="/assets/icons/book-closed.svg"
                  alt="libro"
                  width={24}
                  height={24}
                  priority
                />}
              >Registros Anteriores</Button>
              <Button
                radius='sm'
                size="lg"
                
                className='text-black text-lg bg-white shrink-1 py-8 font-bold'
                
                fullWidth
                onClick={() => router.push('/welcome')}
                startContent={<Image
                  src="/assets/icons/check-square-broken.svg"
                  alt="checkmark"
                  width={24}
                  height={24}
                  priority
                />}
              >Checklist</Button>
            </div>
          </div>
        </div>
      </div>
      <FooterBGPattern />
    </>
  );
}
