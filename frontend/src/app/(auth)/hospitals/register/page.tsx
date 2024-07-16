'use client';
import { useState } from 'react';
import { 
  Button, 
  Input, 
  Link, 
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import FooterBGPattern from '@/components/FooterBGPattern';
import IconContainer from '@/components/IconContainer';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div className="hospital mx-auto px-8 pt-10 pb-16 max-w-screen-lg box-border justify full_height_content">
        <div className="hospital__content flex flex-col content_box_container no_footer_bg relative">
          <IconContainer classes="mx-auto mb-8" icon="building" />
          <h2 className='text-center user_page_title'>Registrar Hospital</h2>
          <div className="register__form_container flex flex-col gap-6 pt-8">
            <div className="flex">
              <Input
                key="outside"
                label="Nombre del Hospital*"
                className="text-black label-black"
                labelPlacement="outside"
                placeholder="Hospital..."
                variant="bordered"
                fullWidth
                radius="sm"
              />
            </div>
            <div className="flex">
              <Input
                key="outside"
                label="Teléfono"
                className="text-black label-black"
                labelPlacement="outside"
                placeholder="i.e: +1 (555) 000-0000"
                variant="bordered"
                fullWidth
                radius="sm"
              />
            </div>
            <div className="flex">
            <Textarea
              label="Dirección"
              labelPlacement="outside"
              placeholder="Ingresa la dirección"
              className="text-black label-black"
              variant="bordered"
            />
            </div>
            <div className="flex">
              <Input
                key="outside"
                label="Email"
                className="text-black label-black"
                labelPlacement="outside"
                placeholder="i.e: john@doe.com"
                variant="bordered"
                fullWidth
                radius="sm"
              />
            </div>
            <div className="flex">
              <Link href="/login" className="font-semibold text-blue">
                <Image
                  src="/assets/icons/plus-square.svg"
                  alt="regresar"
                  width={22}
                  height={22}
                  priority
                /> Agregar email
              </Link>
            </div>
          </div>
          <div className="flex mt-auto">
            <div className="w-2/12"></div>
            <div className="w-8/12">
              <Button
                radius='sm'
                size="lg"
                className='text-black text-lg shrink-1 py-8 bg-primary font-bold'
                
                fullWidth
                onClick={() => router.push('/register')}
              >
              <Image
              src="/assets/icons/save.svg"
              alt="Save Icon"
              width={24}
              height={24}
              className="mr-2"
              />
              Guardar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
