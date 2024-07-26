'use client';
import { useState } from 'react';
import { 
  Button, 
  Input, 
  Link, 
  Select,
  SelectItem, 
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import FooterBGPattern from '@/components/FooterBGPattern';
import IconContainer from '@/components/IconContainer';
import Image from 'next/image';

export default function Page() {
  const router = useRouter(); 

  return (
    <>
      <div className="hospital mx-auto px-8 pt-10 pb-16  box-border justify ">
        <div className="hospital__content flex flex-col content_box_container no_footer_bg relative">
          <IconContainer classes="mx-auto mb-8" icon="building" />
          <h2 className='text-center user_page_title'>Registro de Hospitales</h2>
          <div className="hospital__form_container flex flex-col gap-6 pt-8">
            <div className="flex">
              <Input
                key="outside"
                isClearable
                className="text-black label-black"
                placeholder="Buscar"
                variant="bordered"
                fullWidth
                radius="sm"
                startContent={<Image
                  src={`/assets/icons/search.svg`}
                  alt="search"
                  width={22}
                  height={22}
                  priority
                />}
              />
            </div>
          </div>
          <div className="imgBackground relative flex justify-center">
              <Image
              src="/assets/no_hospitals.jpg"
              alt="results"
              width={1000}
              height={1000}
              className='w-auto h-custom content-center'
              priority
              />
              <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ color: 'var(--color-gray-200)'}}>
              Aún no tienes registros
              </h3>
          </div>
          <div className="results">
          
          </div>
          <div className="flex mt-auto">
            <div className="w-2/12"></div>
            <div className="w-8/12">
            
              <Button
                radius='sm'
                size="lg"
                className='text-black text-lg shrink-1 py-8 bg-primary font-bold'
                
                fullWidth
                onClick={() => router.push('/hospitals/register')}
              >
                <Image
              src="/assets/icons/plus-square-black.svg"
              alt="Save Icon"
              width={24}
              height={24}
              className="mr-2"
              />  
                Registrar Nuevo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
