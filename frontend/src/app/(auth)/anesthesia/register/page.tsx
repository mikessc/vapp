'use client';
import { useState } from 'react';
import { 
  Button, 
  Input, 
  Link, 
  Tabs,
  Tab,
  Select,
  SelectItem,
  Textarea,
  RadioGroup,
  Radio
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import FooterBGPattern from '@/components/FooterBGPattern';
import IconContainer from '@/components/IconContainer';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();

  return (
    <>
      <div className="anesthesia mx-auto px-8 pt-10 pb-16 max-w-screen-lg box-border justify full_height_content">
        <div className="flex gap-6 items-center mb-8">
          <IconContainer icon="book" classes="title-left-icon" />
          <h2 className='text-center anesthesia_page_title'>Nuevo Registro de Anestesia</h2>
        </div>
        <div className="flex w-full flex-col">
          <Tabs 
            aria-label="Options" 
            className="tabs_holder" 
            radius="sm" 
            color="primary"
            variant="light"
            >
            <Tab key="procedimiento" title="Procedimiento">
              <div className="anesthesia__content flex flex-col content_box_container no_footer_bg relative mb-8">
                <div className="register__form_container flex flex-col gap-6">
                  <h3 className="inner_title text-black text-center">
                    <span className="bg-white">Paciente</span>
                  </h3>
                  <div className="flex flex-col">
                    <Input
                      label="Buscar Existentes"
                      labelPlacement="outside"
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
                    <p className="info_text py-2">Solo se muestran los registros de las últimas 24 horas</p>
                  </div>
                  <h4 className="inner_title text-gray text-center">
                    <span className="bg-white">Ingresar Datos</span>
                  </h4>
                  <div className="flex flex-col">
                    <Input
                      label="Seleccionar Hospital*"
                      labelPlacement="outside"
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
                    <Link href="/login" className="font-semibold text-blue py-3">
                      <Image
                        src="/assets/icons/plus-square.svg"
                        alt="regresar"
                        width={22}
                        height={22}
                        priority
                      /> Registrar Hospital
                    </Link>
                    <div className="register__form_container flex flex-col gap-6 pt-2">
                      <div className="flex">
                        <Input
                          key="outside"
                          label="Nombre*"
                          className="text-black label-black"
                          labelPlacement="outside"
                          placeholder="Digite nombre del paciente"
                          variant="bordered"
                          fullWidth
                          radius="sm"
                        />
                      </div>
                      <div className="flex gap-6">
                        <div className="w-6/12">
                          <Select
                            key="outside"
                            label="Especie*"
                            className="text-black label-black"
                            labelPlacement="outside"
                            placeholder="Seleccione una"
                            variant="bordered"
                            fullWidth
                            radius="sm"
                          >
                            <SelectItem key="perro" value="perro" className='text-black'>
                              Perro
                            </SelectItem>
                            <SelectItem key="gato" value="gato" className='text-black'>
                              Gato
                            </SelectItem>
                            <SelectItem key="caballo" value="caballo" className='text-black'>
                              Caballo
                            </SelectItem>
                            <SelectItem key="conejo" value="conejo" className='text-black'>
                              Conejo
                            </SelectItem>
                            <SelectItem key="cobayo" value="cobayo" className='text-black'>
                              Cobayo
                            </SelectItem>
                            <SelectItem key="huron" value="huron" className='text-black'>
                              Hurón
                            </SelectItem>
                            <SelectItem key="hamster" value="hamster" className='text-black'>
                              Hamster
                            </SelectItem>
                            <SelectItem key="chinchilla" value="chinchilla" className='text-black'>
                              Chinchilla
                            </SelectItem>
                          </Select>
                        </div>
                        <div className="w-6/12">
                          <Select
                              key="outside"
                              label="Raza"
                              className="text-black label-black"
                              labelPlacement="outside"
                              placeholder="Seleccione una"
                              variant="bordered"
                              fullWidth
                              radius="sm"
                            >
                              <SelectItem key="perro" value="perro" className='text-black'>
                              </SelectItem>
                            </Select>
                        </div>
                      </div>
                      <div className="flex gap-6">
                        <div className="w-6/12">
                          <Input
                            key="outside"
                            label="Peso*"
                            className="text-black label-black"
                            labelPlacement="outside"
                            placeholder="Peso del paciente en kilogramos"
                            variant="bordered"
                            fullWidth
                            radius="sm"
                            endContent={
                              (<span className="input_end">kg</span>)
                            }
                          />
                        </div>
                        <div className="w-6/12">
                          <div className="flex gap-6">
                            <div className="w-6/12">
                              <Input
                                key="outside"
                                label="Edad*"
                                className="text-black label-black"
                                labelPlacement="outside"
                                placeholder=" "
                                variant="bordered"
                                fullWidth
                                radius="sm"
                                description="Años"
                              />
                            </div>
                            <div className="w-6/12">
                              <Input
                                key="outside"
                                label=" "
                                className="text-black label-black"
                                labelPlacement="outside"
                                placeholder=" "
                                variant="bordered"
                                fullWidth
                                radius="sm"
                                description="Meses"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex">
                        <RadioGroup
                          label="Sexo*"
                          orientation="horizontal"
                          className="text-black"
                          color="primary"
                        >
                          <Radio value="hembra" className="mr-24">Hembra</Radio>
                          <Radio value="macho">Macho</Radio>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="anesthesia__content flex flex-col content_box_container no_footer_bg relative mb-8">
                <div className="register__form_container flex flex-col gap-6">
                  <h3 className="inner_title text-black text-center">
                    <span className="bg-white">Procedimiento</span>
                  </h3>
                  <div className="flex flex-col">
                    <Input
                      label="Número de Ficha de Paciente"
                      labelPlacement="outside"
                      key="outside"
                      isClearable
                      className="text-black label-black"
                      placeholder=" "
                      variant="bordered"
                      fullWidth
                      radius="sm"
                    />
                    <p className="info_text py-2">El número corresponde al consecutivo asignado por el hospital. </p>
                  </div>
                  <div className="flex flex-col">
                    <Input
                      label="Cirujano"
                      labelPlacement="outside"
                      key="outside"
                      isClearable
                      className="text-black label-black"
                      placeholder=" "
                      variant="bordered"
                      fullWidth
                      radius="sm"
                    />
                  </div>
                  <div className="flex gap-6">
                    <div className="w-6/12">
                      <Select
                        key="outside"
                        label="Procedimiento"
                        className="text-black label-black"
                        labelPlacement="outside"
                        placeholder=" "
                        variant="bordered"
                        fullWidth
                        radius="sm"
                      >
                        <SelectItem key="perro" value="perro" className='text-black'>
                        </SelectItem>
                      </Select>
                    </div>
                    <div className="w-6/12">
                      <Select
                          key="outside"
                          label="Posicionamiento"
                          className="text-black label-black"
                          labelPlacement="outside"
                          placeholder=" "
                          variant="bordered"
                          fullWidth
                          radius="sm"
                        >
                          <SelectItem key="perro" value="perro" className='text-black'>
                          </SelectItem>
                        </Select>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Input
                      label="Medicaciones"
                      labelPlacement="outside"
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
                  <div className="flex">
                    <p><b>Nombre de Medicación</b> texto extra de apoyo</p>
                  </div>
                  <div className="flex gap-8">
                    <div className="w-6/12">
                      <Input
                        key="outside"
                        label="Hora de Inicio*"
                        className="text-black label-black"
                        labelPlacement="outside"
                        placeholder="00:00"
                        variant="bordered"
                        fullWidth
                        radius="sm"
                      />
                    </div>
                    <div className="w-6/12 flex items-end gap-6">
                      <Input
                        key="outside"
                        label="Dosis"
                        className="text-black label-black"
                        labelPlacement="outside"
                        placeholder=" "
                        variant="bordered"
                        fullWidth
                        radius="sm"
                        endContent={
                          (<span className="input_end">Unidad</span>)
                        }
                      />
                      <Image
                        src={`/assets/trash.svg`}
                        alt="search"
                        width={40}
                        height={40}
                        priority
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Input
                      label="Patologías Previas"
                      labelPlacement="outside"
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
                  <div className="flex flex-row gap-4 flex-wrap">
                    <span className="tag">Patología Previa</span>
                    <span className="tag">Patología Previa</span>
                    <span className="tag">Patología Previa</span>
                    <span className="tag">Patología Previa</span>
                    <span className="tag">Patología Previa</span>
                    <span className="tag">Patología Previa</span>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab key="exámenes" title="Exámenes">
            </Tab>
            <Tab key="protocolo" title="Protocolo">
            </Tab>
            <Tab key="monitorizacion" title="Monitorización">
            </Tab>
            <Tab key="finalizacion" title="Finalización">
            </Tab>
            <Tab key="reporte" title="Reporte">
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  );
}
 