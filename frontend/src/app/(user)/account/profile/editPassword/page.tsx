'use client';
import { useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import FooterBGPattern from '@/components/FooterBGPattern';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleBack = () => {
    router.back();
  };

  const handleChangePassword = () => {
    console.log('Changing password...');
  };

  return (
    <>
      <div className="change-password-container mx-auto px-8 pt-4 pb-16 max-w-screen-lg box-border bg-gray-100 flex flex-col justify-between min-h-screen"
        style={{
          display: 'flex',
          padding: '16px',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          flex: '1 0 0',
          alignSelf: 'stretch',
          marginTop: '16px'
        }}
      >
        <div className="change-password__content flex flex-col items-center bg-white p-8 shadow-md rounded-md w-full">
          <div className="change-password__header flex items-center gap-2 mb-4 self-start" style={{ color: '#1B5B8C' }}>
            <Image
              src="/assets/icons/chevron-left.svg"
              alt="chevron-left"
              width={20}
              height={20}
              style={{ fill: '#1B5B8C' }}
            />
            <span
              className='text-lg'
              onClick={handleBack}
              style={{
                color: '#1B5B8C',
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '20px',
                cursor: 'pointer'
              }}
            >
              Contraseña
            </span>
          </div>

          <h2 className="text-center user_page_title mb-8" style={{
            color: '#666565',
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '24px',
            textAlign: 'center'
          }}>
            Ingresa una nueva contraseña para tu cuenta
          </h2>

          <div className="input-container flex flex-col gap-2 w-full mb-4">
            <span className="text-sm font-medium" style={{
              color: '#403F3F',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px'
            }}>
              Contraseña
            </span>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              key="outside"
              labelPlacement="outside"
              variant="bordered"
              fullWidth
              style={{
                padding: '10px 14px',
                background: 'var(--Base-White, #FFF)',
                borderRadius: '8px',
                color: '#666565'
              }}
            />
          </div>

          <div className="input-container flex flex-col gap-2 w-full mb-4">
            <span className="text-sm font-medium" style={{
              color: '#403F3F',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px'
            }}>
              Confirmar Contraseña
            </span>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirma tu contraseña"
              key="outside"
              labelPlacement="outside"
              variant="bordered"
              fullWidth
              style={{
                padding: '10px 14px',
                background: 'var(--Base-White, #FFF)',
                borderRadius: '8px',
                color: '#666565'
              }}
            />
          </div>

          <div className="criteria-container flex flex-col gap-2 w-full mb-8">
            <p className="text-sm flex items-center" style={{
              color: '#666565',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px'
            }}>
              <Image
                src="/assets/icons/check-circle.svg"
                alt="check-circle"
                width={20}
                height={20}
                style={{ marginRight: '8px' }}
              />
              Debe tener al menos 8 caracteres
            </p>

            <p className="text-sm flex items-center" style={{
              color: '#666565',
              fontFamily: 'Roboto',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20px'
            }}>
              <Image
                src="/assets/icons/check-circle.svg"
                alt="check-circle"
                width={20}
                height={20}
                style={{ marginRight: '8px' }}
              />
              Debe contener un caracter especial
            </p>
          </div>

          <Button
            radius='sm'
            size="lg"
            className='text-black text-lg shrink-1 py-8 bg-primary font-bold'
            fullWidth
            onClick={handleChangePassword}
            style={{
              display: 'flex',
              width: '452px',
              padding: '16px 22px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              borderRadius: '8px',
              border: '1px solid #FCD9CA',
              background: '#F5824F',
              boxShadow: '0px 1px 2px 0px rgba(28, 28, 28, 0.05)'
            }}
          >
            <Image
              src="/assets/icons/lock-01.svg"
              alt="candado"
              width={24}
              height={24}
              style={{ marginRight: '8px', fill: '#472111' }} // Color del icono del candado
            />
            <span style={{ color: '#472111', fontWeight: '600' }}>Cambiar Contraseña</span> {/* Color del texto del botón y semibold */}
          </Button>
        </div>
      </div>
      <FooterBGPattern />
    </>
  );
}