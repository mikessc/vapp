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

const AlertEmail = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src="/assets/icons/helpIcon.svg" // Ajusta la ruta a tu ícono
        alt="Save Icon"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      {isHovered && (
        <div className="absolute -right-1 -top-12 mt-2 mr-2 w-64 p-2 bg-stone-900 border border-stone-900 rounded shadow-lg">
        <div className="relative flex justify-center">
          <div className="absolute top-4 left-full transform -translate-x-1/2 w-3 h-3 bg-stone-900 border-l border-t border-stone-900 rotate-45"></div>
        </div>
        <p className="text-white text-xs">Los reportes se enviarán a este correo.</p>
      </div>
      )}
    </div>
  );
};

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div className="hospital mx-auto px-8 pt-10 pb-16 max-w-screen-lg box-border justify full_height_content">
        <div className="hospital__content flex flex-col content_box_container no_footer_bg relative">
          <IconContainer classes="mx-auto mb-8" icon="edit" />
          <h2 className='text-center user_page_title'>Editar Hospital</h2>
          <div className="register__form_container flex flex-col gap-6 pt-8">
            <div className="flex">
              <Input
                key="outside"
                label="Nombre del Hospital*"
                className="text-black label-black"
                labelPlacement="outside"
                placeholder="Hospital Veterinario de Santiago"
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
                placeholder="(562) 2544-0996"
                variant="bordered"
                fullWidth
                radius="sm"
              />
            </div>
            <div className="flex">
            <Textarea
              label="Dirección"
              labelPlacement="outside"
              placeholder="Av. Santa Rosa #1934, Santiago"
              className="text-black label-black"
              variant="bordered"
            />
            </div>
            <div className="flex relative">
              <Input
                key="outside"
                label="Email"
                className="text-black label-black"
                labelPlacement="outside"
                placeholder="hospitalveterinario@hvs.cl"
                variant="bordered"
                fullWidth
                radius="sm"
              />
              <div className="absolute right-3 top-2/3 transform -translate-y-1/2">
                <AlertEmail />
              </div>
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
          <div className="flex mt-auto justify-between space-x-8">
            <div className="buttonsEditSection w-6/12">
              <Button 
                fullWidth
                className="py-8 text-lg text-stone-800 border font-bold
                border-stone-600 rounded-md hover:bg-stone-400 bg-white
                shrink-1 ">
              Cancelar
              </Button>
            </div>
            <div className="buttonsEditSection w-6/12">
              <Button
                radius='sm'
                size="lg"
                fullWidth
                className=' text-black text-lg shrink-1 py-8 bg-primary font-bold'
                onClick={() => router.push('/register')}
              >
              <Image
              src="/assets/icons/save.svg"
              alt="Save Icon"
              width={24}
              height={24}
              className="mr-2"
              />
              Guardar</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
