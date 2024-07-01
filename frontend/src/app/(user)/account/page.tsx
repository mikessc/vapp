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
  const [showLoading, setShowLoading] = useState(false);
  const [showInput, setShowInput] = useState(true);

  return (
    <>
      <div className="register mx-auto px-8 pt-10 pb-16 max-w-screen-lg box-border justify">
        <div className="register__content flex flex-col content_box_container relative">
          <IconContainer classes="mx-auto mb-8" icon="user" />
          <h2 className='text-center user_page_title'>Account</h2>
          <div className="register__form_container flex flex-col gap-6 pt-8">
            <div className="flex">
              <Input
                key="outside"
                label="Nombre Completo*"
                className="text-black label-black"
                labelPlacement="outside"
                placeholder="Digite su nombre completo"
                variant="bordered"
                fullWidth
                radius="sm"
              />
            </div>
            <div className="flex gap-6">
              <div className="w-6/12">
                <Input
                  key="outside"
                  label="Número de Identificación (DNI)*"
                  className="text-black label-black"
                  labelPlacement="outside"
                  placeholder="Digite su identificación"
                  variant="bordered"
                  fullWidth
                  radius="sm"
                />
              </div>
              <div className="w-6/12">
                <Input
                  key="outside"
                  label="Número de Colegiado o Registro Veterinario*"
                  className="text-black label-black"
                  labelPlacement="outside"
                  placeholder="Digite colegiado o registro veterinario"
                  variant="bordered"
                  fullWidth
                  radius="sm"
                />
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-6/12">
                <Select
                  key="outside"
                  label="Profesión*"
                  className="text-black label-black"
                  labelPlacement="outside"
                  placeholder="Seleccione una"
                  variant="bordered"
                  fullWidth
                  radius="sm"
                >
                  <SelectItem key="veterinario" value="veterinario" className='text-black'>Veterinario</SelectItem>
                  <SelectItem key="tecnico" value="tecnico" className='text-black'>Técnico Veterinario</SelectItem>
                </Select>
              </div>
              <div className="w-6/12">
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
            <div className='flex'>
              <Input
                key="outside"
                label="Contraseña"
                type="password"
                className="text-black label-black"
                labelPlacement="outside"
                placeholder="Digite su contraseña"
                variant="bordered"
                fullWidth
                radius="sm"
              />
            </div>
            <div className="password_hints">
              <p className="password_hints__hint text-black flex gap-2 pb-2 items-center">
                <span className="hint__icon">
                  <Image
                    src="/assets/icons/check-circle.svg"
                    alt="checkmark"
                    width={22}
                    height={22}
                    priority
                  />
                </span> Debe tener al menos 8 caracteres
              </p>
              <p className="password_hints__hint text-black flex gap-2 pb-2 items-center">
                <span className="hint__icon">
                  <Image
                    src="/assets/icons/check-circle.svg"
                    alt="checkmark"
                    width={22}
                    height={22}
                    priority
                  />
                </span> Debe contener un caracter especial
              </p>
            </div>
            <div className="flex">
              <div className="w-2/12"></div>
              <div className="w-8/12">
                <Button
                  radius='sm'
                  size="lg"
                  className='text-black text-lg shrink-1 py-8 bg-primary font-bold'
                  
                  fullWidth
                  onClick={() => router.push('/confirm_email')}
                >Registrarme</Button>
              </div>
            </div>
          </div>
          <FooterBGPattern position="absolute" bottom="40px"/>
        </div>
      </div>
    </>
  );
}
