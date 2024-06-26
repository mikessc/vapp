'use client';
import { Button, Input, Link } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import FooterBGPattern from '@/components/FooterBGPattern';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div className="login mx-auto px-8 pt-36 pb-16 max-w-screen-lg box-border justify">
        <div className="login__content flex flex-col content_box_container relative">
          <h2 className='text-center user_page_title'>¡Hola de nuevo!</h2>
          <p className="text-center text-gray">Por favor, ingresa en tu cuenta.</p>
          <div className="login__form_container flex flex-col gap-6 pt-8">
            <Input
              key="outside"
              label="Email"
              className="text-black label-black"
              labelPlacement="outside"
              placeholder="one@example.com"
              variant="bordered"
              fullWidth
              radius="sm"
            />
            <Input
              key="outside"
              label="Contraseña"
              className="text-black label-black"
              labelPlacement="outside"
              placeholder="Ingresa tu contraseña"
              variant="bordered"
              fullWidth
              radius="sm"
            />
            <p><Link href="/password_recovery" className="font-semibold text-blue">Olvidé mi contraseña</Link></p>
            <div className="flex">
              <div className="w-2/12"></div>
              <div className="w-8/12">
                <Button
                  radius='sm'
                  size="lg"
                  className='text-black text-lg shrink-1 py-8 bg-primary font-bold'
                  
                  fullWidth
                  onClick={() => router.push('/home')}
                >Iniciar Sesión</Button>
              </div>
            </div>
            <p className="text-center text-black">
              ¿No tienes una cuenta? <Link href="/register" className="font-semibold text-blue">Regístrate</Link>
            </p>
          </div>
          <FooterBGPattern position="absolute" bottom="40px"/>
        </div>
      </div>
    </>
  );
}
