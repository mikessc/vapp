'use client';
import { useState } from 'react';
import { 
  Button,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import FooterBGPattern from '@/components/FooterBGPattern';
import IconContainerCircle from '@/components/IconContainerCircle';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();
  const [showLoading, setShowLoading] = useState(false);
  const [showInput, setShowInput] = useState(true);

  return (
    <>
      <div className="profile mx-auto px-8 pt-10 pb-16 max-w-screen-lg box-border bg-gray-100">
        <div className="profile__content flex flex-col items-center relative">
          <IconContainerCircle classes="mx-auto mb-1" icon="user" />
          <h2 className="text-center user_page_title mb-1" style={{ color: '#403F3F' }}>Natalia Quirós</h2>
          <h3 className="text-center text-base" style={{ color: '#666565' }}>Veterinario</h3>

          {/* Primer contenedor de botones */}
          <div className="buttons-container-wrapper grid grid-cols-12 gap-4 w-full">
            <div className="buttons-container col-start-2 col-span-10 bg-white p-8 mt-8 rounded-lg">
              <Button
                radius='sm'
                size="lg"
                className='text-lg bg-white flex items-center py-8 font-bold w-full mb-4 rounded-lg custom_button custom_border'
                onClick={() => router.push('/hospitals/search')}
              >
                <div className="flex items-center">
                  <Image
                    src="/assets/icons/edit-03.svg"
                    alt="editar"
                    width={24}
                    height={24}
                    priority
                  />
                  <span className="ml-4">Editar Perfil</span>
                </div>
              </Button>
              <Button
                radius='sm'
                size="lg"
                className='text-lg bg-white flex items-center py-8 font-bold w-full mb-4 rounded-lg custom_button custom_border'
                onClick={() => router.push('/welcome')}
              >
                <div className="flex items-center">
                  <Image
                    src="/assets/icons/lock-01.svg"
                    alt="candado"
                    width={24}
                    height={24}
                    priority
                  />
                  <span className="ml-4">Cambiar Contraseña</span>
                </div>
              </Button>
              <Button
                radius='sm'
                size="lg"
                className='text-lg bg-white flex items-center py-8 font-bold w-full mb-4 rounded-lg custom_button custom_border'
                onClick={() => router.push('/welcome')}
              >
                <div className="flex items-center">
                  <Image
                    src="/assets/icons/globe-04.svg"
                    alt="mundo"
                    width={24}
                    height={24}
                    priority
                  />
                  <span className="ml-4">Idioma</span>
                </div>
              </Button>
            </div>
          </div>

          {/* Segundo contenedor de botones con el diseño requerido */}
          <div className="buttons-container-wrapper grid grid-cols-12 gap-4 w-full">
            <div className="buttons-container col-start-2 col-span-10 bg-white p-8 mt-8 rounded-lg">
              <Button
                radius='sm'
                size="lg"
                className='text-lg bg-white flex items-center py-8 font-bold w-full mb-4 rounded-lg custom_button custom_border'
                onClick={() => router.push('/hospitals/search')}
              >
                <div className="flex items-center w-full">
                  <Image
                    src="/assets/icons/building-05.svg"
                    alt="hospital"
                    width={24}
                    height={24}
                    priority
                  />
                  <span className='ml-4'>Hospitales Activos</span>
                  <div className="flex-grow" />
                  <Image
                    src="/assets/icons/chevron-right.svg"
                    alt="chevron-right"
                    width={24}
                    height={24}
                    priority
                    className='mr-4'
                  />
                </div>
              </Button>
              <Button
                radius='sm'
                size="lg"
                className='text-lg bg-white flex items-center py-8 font-bold w-full mb-4 rounded-lg custom_button custom_border'
                onClick={() => router.push('/welcome')}
              >
                <div className="flex items-center w-full">
                  <Image
                    src="/assets/icons/line-chart-up-03.svg"
                    alt="editar"
                    width={24}
                    height={24}
                    priority
                  />
                  <span className='ml-4'>Estadísticas</span>
                  <div className="flex-grow" />
                  <Image
                    src="/assets/icons/chevron-right.svg"
                    alt="chevron-right"
                    width={24}
                    height={24}
                    priority
                    className='mr-4'
                  />
                </div>
              </Button>
              <Button
                radius='sm'
                size="lg"
                className='text-lg bg-white flex items-center py-8 font-bold w-full mb-4 rounded-lg custom_button custom_border'
                onClick={() => router.push('/welcome')}
              >
                <div className="flex items-center w-full">
                  <Image
                    src="/assets/icons/recording-02.svg"
                    alt="libro"
                    width={24}
                    height={24}
                    priority
                  />
                  <span className='ml-4'>Notas de Voz</span>
                  <div className="flex-grow" />
                  <Image
                    src="/assets/icons/chevron-right.svg"
                    alt="chevron-right"
                    width={24}
                    height={24}
                    priority
                    className='mr-4'
                  />
                </div>
              </Button>
            </div>
          </div>
          
        </div>
      </div>
      <FooterBGPattern />
    </>
  );
}