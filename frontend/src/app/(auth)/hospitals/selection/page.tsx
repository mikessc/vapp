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

const ITEMS_PER_PAGE = 100;


const HospitalCard = () => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  const openModal = () => {
    setIsOpenModal(true);
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const handleDelete = () => {
    // Aquí iría la lógica para eliminar el registro
    console.log('Eliminando registro...');
    setIsOpenModal(false); // Cerrar el modal después de eliminar
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
            {isOpenModal && (
               <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
               <div className="bg-white p-10 rounded-lg flex flex-col justify-center items-center relative">
                 <Image
                   src="/assets/icons/x-close.svg"
                   alt="Close Icon"
                   className="cursor-pointer absolute top-5 right-7"
                   onClick={closeModal}
                   width={25}
                   height={25}
                 />
       
                 <div className="flex flex-col items-center gap-4">
                   <Image 
                   src="/assets/icons/delete-Icon.svg" 
                   alt="Trash Icon" 
                   width={60} 
                   height={60} 
                   />
       
                   <h2 className="text-lg font-semibold text-stone-900">Eliminar Hospital</h2>
                   <div className="alert flex flex-col items-center font-normal">
                   <p className="text-sm text-stone-600">¿Estás seguro de que deseas borrar este registro?</p>
                   <p className="text-sm text-stone-600">Esta acción es permanente.</p>
                   </div>
       
                   <div className="flex gap-4 mt-4">
                   <button className="
                   px-16 py-2 text-lg text-stone-800 border
                    border-stone-600 rounded-md hover:bg-stone-100" onClick={closeModal}>
                    Cancelar
                  </button>
                  <button className="
                  px-16 py-2 text-lg text-white bg-red-500
                   rounded-md hover:bg-red-600" onClick={handleDelete}>
                    Eliminar
                  </button>
                  </div>
                </div>
              </div>
            </div>
            )}
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
  const [currentPage, setCurrentPage] = useState(1);

  const hospitals = new Array(55).fill(null); // Suponiendo que tienes 500 hospitales como ejemplo

  const totalPages = Math.ceil(hospitals.length / ITEMS_PER_PAGE);

  const currentHospitals = hospitals.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="hospital mx-auto px-8 pt-10 pb-16 box-border justify">
        <div className="hospital__content flex flex-col content_box_container no_footer_bg relative">

          <IconContainer classes="mx-auto mb-8" icon="building" />
          <h2 className='text-center user_page_title'>Registro de Hospitales</h2>
          <div className="hospital__form_container flex flex-col gap-6 pt-8 pb-8 ">
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
          
          <div className="results max-h-110 overflow-y-auto mx-5 px-6">
          {hospitals.map((_, index) => (
              <HospitalCard key={index} />
            ))}

            {/* con esta otra logica se puede imprimir cada 100 y tiene boton de anterior y siguiente para paginas */}
            {/* {currentHospitals.map((_, index) => (
              <HospitalCard key={index} />
            ))} */}
          </div>
          
          {/* <div className="flex justify-center mt-4">
            <Button onClick={prevPage} disabled={currentPage === 1} className="mr-2 p-2 bg-gray-200 rounded">
              Anterior
            </Button>
            <Button onClick={nextPage} disabled={currentPage === totalPages} className="p-2 bg-gray-200 rounded">
              Siguiente
            </Button>
          </div> */}

          <div className="flex mt-auto pt-8">
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