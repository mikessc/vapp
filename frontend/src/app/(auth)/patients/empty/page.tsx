"use client";
import { useState } from "react";
import { Button, Input, Link, Select, SelectItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import FooterBGPattern from "@/components/FooterBGPattern";
import IconContainer from "@/components/IconContainer";
import Image from "next/image";

const DropdownEsp = () => {
  const router = useRouter();
  const [selectedSpecies, setSelectedSpecies] = useState("");

  const handleSelectChange = (value: string) => {
    setSelectedSpecies(value);
  };
  const speciesList = [
    "Canino",
    "Felino",
    "Ave",
    "Reptil",
    "Roedor",
    "Equino",
    "Bovino",
    "Porcino",
    "Otro",
  ];

  return (
    <Select
      value={selectedSpecies}
      onChange={(event) => handleSelectChange(event.target.value)}
      placeholder="Seleccionar especie"
      className="text-black label-black bordered border-stone-200 border-2 hover:border-stone-400 sm:w-full rounded-lg"
      style={{ backgroundColor: "white" }}
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

  return (
    <>
      <div className="hospital mx-auto px-8 pt-10 pb-16 box-border justify">
        <div className="hospital__content flex flex-col content_box_container no_footer_bg relative">
          <IconContainer classes="mx-auto mb-8" icon="edit" />
          <h2 className="text-center user_page_title">Registro de Pacientes</h2>
          <div className="hospital__form_container pt-8">
            <h6 className="text-stone-700">Seleccionar Hospital*</h6>
            <div className="flex">
              <Input
                key="outside"
                isClearable
                className="text-black label-black"
                placeholder="Buscar"
                variant="bordered"
                fullWidth
                radius="sm"
                startContent={
                  <Image
                    src={`/assets/icons/search.svg`}
                    alt="search"
                    width={22}
                    height={22}
                    priority
                  />
                }
              />
            </div>
            <div className="flex flex-row mt-6 gap-6">
              <div className="especie flex flex-col w-2/4">
                <h6 className="text-stone-700">Especie</h6>
                <DropdownEsp />
              </div>
              <div className="nombreDePaciente flex flex-col w-2/4">
                <h6 className="text-stone-700">Nombre del Paciente</h6>
                <div className="flex">
                  <Input
                    key="outside"
                    isClearable
                    className="text-black label-black"
                    variant="bordered"
                    fullWidth
                    radius="sm"
                    startContent={
                      <Image
                        src={`/assets/icons/search.svg`}
                        alt="search"
                        width={22}
                        height={22}
                        priority
                      />
                    }
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
              className="w-auto content-center"
              priority
            />
            <h3
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ color: "var(--color-gray-200)" }}
            >
              Aún no tienes registros
            </h3>
          </div>

          <div className="results"></div>

          <div className="flex mt-auto">
            <div className="w-2/12"></div>
            <div className="w-8/12">
              <Button
                radius="sm"
                size="lg"
                className="text-black text-lg shrink-1 py-8 bg-primary font-bold"
                fullWidth
                onClick={() => router.push("/hospitals/register")}
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
