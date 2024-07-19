'use client';
import { useState } from 'react';
import {
  Button,
  Input,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import FooterBGPattern from '@/components/FooterBGPattern';
import Image from 'next/image';
import FileUpload from '@/components/FileUpload';

const DropdownPro = () => {
  const router = useRouter();
  const [selectedProfesion, setSelectedProfesion] = useState('');

  const handleSelectChange = (value: string) => {
    setSelectedProfesion(value);
  };
  const speciesList = [
    'Veterinario',
    'Policia',
    'Doctor',
    'Bombero',
    'Chef',
    'Psicologo',
    'Arquitecto',
    'Ing. X',
    'Otro'
  ];

  return (
    <Select
      value={selectedProfesion}
      onChange={(event) => handleSelectChange(event.target.value)}
      placeholder="Seleccionar Profesion"
      className="text-black label-black bordered border-stone-200 border-2 hover:border-stone-400 sm:w-full rounded-lg "
      style={{ backgroundColor: 'white', height: '34px' }}
    >

      {speciesList.map((species, index) => (
        <SelectItem key={index} value={species}>
          {species}
        </SelectItem>
      ))}
    </Select>
  );
};


export default function Page() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [profession, setProfession] = useState('');
  const [phone, setPhone] = useState('');
  const [signature, setSignature] = useState(null);
  const [logo, setLogo] = useState(null);


  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    // Implementar lógica de guardar aquí
    console.log('Guardando...');
  };

  const handleCancel = () => {
    // Implementar lógica de cancelar aquí
    console.log('Cancelando...');
  };

  return (
    <div>
      <div className="change-password-container mx-auto px-8 pt-4 pb-16 max-w-screen-lg box-border bg-gray-100 flex flex-col justify-between min-h-screen "
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
              width={10}
              height={10}
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
              Volver atrás
            </span>
          </div>

          <div className="base flex flex-col gap-4     w-full ">

            <div className="input-container flex flex-col gap-2 w-full mb-4">
              <span className="text-sm font-medium" style={{
                color: '#403F3F',
                fontFamily: 'Roboto',
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '20px'
              }}>
                Nombre
              </span>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ingresa tu nombre"
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
                Correo Electrónico
              </span>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu correo electrónico"
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

            <div className="input-container flex flex-row gap-2 w-full mb-4">
              <div className="flex flex-col w-6/12">
                <span className="text-sm font-medium" style={{
                  color: '#403F3F',
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px'
                }}>
                  Número de Identificación
                </span>
                <Input
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                  placeholder="Número de identificación"
                  key="outside"
                  labelPlacement="outside"
                  variant="bordered"
                  style={{
                    padding: '10px 14px',
                    background: 'var(--Base-White, #FFF)',
                    borderRadius: '8px',
                    color: '#666565'
                  }}
                />
              </div>

              <div className="flex flex-col w-6/12 pl-2 ">
                <span className="text-sm font-medium" style={{
                  color: '#403F3F',
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px'
                }}>
                  Número de Colegiado
                </span>
                <Input
                  value={registrationNumber}
                  onChange={(e) => setRegistrationNumber(e.target.value)}
                  placeholder="Número de colegiado"
                  key="outside"
                  labelPlacement="outside"
                  variant="bordered"
                  style={{
                    padding: '10px 14px',
                    background: 'var(--Base-White, #FFF)',
                    borderRadius: '8px',
                    color: '#666565'
                  }}
                />
              </div>
            </div>

            <div className="flex flex-row w-full ">
              <div className="w-6/12 ">
                <span className="text-sm font-medium" style={{
                  color: '#403F3F',
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px'
                }}>
                  Profesion
                </span>

                <DropdownPro />
              </div>

              <div className="flex flex-col w-6/12 pl-2">
                <span className="text-sm font-medium" style={{
                  color: '#403F3F',
                  fontFamily: 'Roboto',
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '20px'
                }}>
                  Teléfono
                </span>
                <Input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Digite el numero de telefono"
                  key="outside"
                  labelPlacement="outside"
                  variant="bordered"
                  style={{
                    padding: '10px 14px',
                    background: 'var(--Base-White, #FFF)',
                    borderRadius: '8px',
                    color: '#666565'
                  }}
                />
              </div>


            </div>

            <div className="flex items-center justify-center">
              <div className="border-t border-stone-300 w-full my-4"></div>
            </div>

                  {/* subir imgs */}
            <div>
              <FileUpload title="Firma Electrónica" cont="Adjuntar una imagen de su firma" accept="image/jpeg,image/png/.pdf" />
              <FileUpload title="Logo Personal " cont="Adjuntar una imagen de su logo" accept="image/jpeg,image/png" />
              {/* Puedes agregar más instancias de FileUpload según sea necesario */}
            </div>


            <div className="flex flex-row gap-4 w-full mb-4">
              <div className="flex flex-col w-1/2">
                <div className="button-container flex justify-start w-full"> {/* Justificar a la izquierda */}
                  {/* Botón Cancelar */}
                  <Button
                    size="lg"
                    onClick={handleCancel}
                    style={{
                      padding: '16px 22px',
                      borderRadius: '8px',
                      border: '1px solid #FCD9CA',
                      background: '#FFF',
                      color: '#F5824F',
                      boxShadow: '0px 1px 2px 0px rgba(28, 28, 28, 0.05)',
                      width: '100%', // Ocupa todo el ancho disponible
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>

              <div className="flex flex-col w-1/2">
                <div className="button-container flex justify-end w-full"> {/* Justificar a la derecha */}
                  {/* Botón Guardar */}
                  <Button
                    size="lg"
                    onClick={handleSave}
                    style={{
                      padding: '16px 22px',
                      borderRadius: '8px',
                      border: '1px solid #FCD9CA',
                      background: '#F5824F',
                      color: '#472111',
                      boxShadow: '0px 1px 2px 0px rgba(28, 28, 28, 0.05)',
                      width: '100%', // Ocupa todo el ancho disponible
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Image
                      src="/assets/icons/save.svg"
                      alt="save"
                      width={24}
                      height={24}
                      style={{ marginRight: '8px', fill: '#472111' }}
                    />
                    Guardar
                  </Button>
                </div>
              </div>
            </div>

          </div>


        </div>
        {/* <FooterBGPattern position="absolute" bottom="40px" />  */}
      </div>

    </div >
  );
};
