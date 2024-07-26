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
import Modal from '@/components/modalConfirm';

const DropdownEsp = () => {
  const router = useRouter();
  const [selectedSpecies, setSelectedSpecies] = useState('');

  const handleSelectChange = (value: string) => {
    setSelectedSpecies(value);
  };
  const speciesList = [
    'Canino',
    'Felino',
    'Ave',
    'Reptil',
    'Roedor',
    'Equino',
    'Bovino',
    'Porcino',
    'Otro'
  ];

  return (
    <Select
      value={selectedSpecies}
      onChange={(event) => handleSelectChange(event.target.value)}
      placeholder="Seleccionar especie"
      className="text-black label-black bordered border-stone-200 border-2 hover:border-stone-400 sm:w-full rounded-lg"
      style={{ backgroundColor: 'white'}}
      >

      {speciesList.map((species, index) => (
        <SelectItem key={index} value={species}>
          {species}
        </SelectItem>
      ))}
    </Select>
  );
};

const PatientsCard = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);
  const handleDelete = () => {
    // Aquí manejas la acción de eliminar
    console.log("Registro eliminado");
    setIsOpenModal(false);
  };

  return (
    <div className="border-2 border-stone-100 p-6 rounded-lg mb-6 bg-white shadow-sm">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
        <div>
          <h2 className="text-lg font-bold">Hospital Veterinario de Santiago</h2>
          <p className="text-stone-400 font-medium">Av. Santa Rosa #1934, Santiago</p>
        </div>
        <div>
          <Image
            src={isOpen ? '/assets/icons/chevron-up.svg' : '/assets/icons/chevron-down.svg'}
            alt="chevron"
            width={24}
            height={24}
          />
        </div>
      </div>
      {isOpen && (
        <div className="mt-6">
          <p className="text-stone-800 font-bold">Teléfono: +123 456 7890</p>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
          <input
          title='email-1'
          type="email"
          value="hospitalveterinarin@hvs.cl"
          className="w-fit font-semibold p-1 rounded-full text-xs border border-stone-300"
          style={{ color: 'var(--color-lightblue)' }}
          readOnly
          />
          <input
          title='email-2'
          type="email"
          value="otroemailhospitalveterinario@hvs.cl"
          className="w-fit font-semibold p-1 rounded-full text-xs border border-stone-300"
          style={{ color: 'var(--color-lightblue)' }}
          readOnly
          />
        </div>
          
          <div className="flex items-center mt-4">
            <input
            type="checkbox"
            id="emailCopy"
            className="colorCheckbox w-4 h-4 mr-2 rounded border 
             "
            />
            <label htmlFor="emailCopy" className="text-gray-700">
            Email con copia de registros
            </label>
          </div>

          <div className="flex gap-4 mt-4">

          <button
              className="text-gray-400 hover:text-gray-700"
              onClick={openModal} // Abrir el modal al hacer clic en este botón
          >
            Borrar registro
          </button>

          <Modal
            isOpen={isOpenModal}
            onClose={closeModal}
            title="Eliminar Hospital"
            description={["¿Estás seguro de que deseas borrar este registro?", "Esta acción es permanente."]}
            onConfirm={handleDelete}
            confirmLabel="Eliminar"
            cancelLabel="Cancelar"
          />  
          <button
            className="text-gray-400 hover:text-gray-700"
            onClick={() => router.push('/hospitals/edit')}
          >
            Editar
          </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default function Page() {
  const router = useRouter(); 

  return (
    <>
      <div className="hospital mx-auto px-8 pt-10 pb-16 box-border justify">
        <div className="hospital__content flex flex-col content_box_container no_footer_bg relative">
          <IconContainer classes="mx-auto mb-8" icon="edit" />
          <h2 className='text-center user_page_title'>Registro de Pacientes</h2>
          <div className="hospital__form_container pt-8">
            <h6 className='text-stone-700'>Seleccionar Hospital*</h6>
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
            <div className='flex flex-row mt-6 gap-6'>
              <div className='especie flex flex-col w-2/4'>
                <h6 className='text-stone-700'>Especie</h6>
                <DropdownEsp />
              </div>
              <div className='nombreDePaciente flex flex-col w-2/4'>
                <h6 className='text-stone-700'>Nombre del Paciente</h6>
                <div className='flex'>
                  <Input
                    key="outside"
                    isClearable
                    className="text-black label-black"
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
            </div>
          </div>
          <div className="imgBackground relative flex justify-center">
            <Image
              src="/assets/no_patients.jpg"
              alt="results"
              width={1000}
              height={1000}
              className='w-auto content-center'
              priority
            />
            <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ color: 'var(--color-gray-200)'}}>
              Aún no tienes registros
            </h3>
          </div>
          <div className="results"></div>
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