'use client';
import React, { useEffect } from 'react';
import {
  Link,
  Divider
} from '@nextui-org/react';
import Image from 'next/image';
import IconContainerCircle from '@/components/IconContainerCircle';

const MainMenu: React.FC = () => {
  const toggleMenu = () => {
    const menuElement = document.getElementById('main_menu');

    if (menuElement) {
      menuElement.classList.toggle('closed');
    } else {
      console.error('Element with ID "main_menu" not found.');
    }
  };

  useEffect(() => {
    const closeButtons = document.getElementsByClassName('closeBTN');
    console.log(closeButtons)

    const handleButtonClick = () => {
      toggleMenu();
    };

    Array.from(closeButtons).forEach(button => {
      button.addEventListener('click', handleButtonClick);
    });

    return () => {
      Array.from(closeButtons).forEach(button => {
        button.removeEventListener('click', handleButtonClick);
      });
    };
  }, []);

  return (
    <>
      <div id="main_menu" className='closed'>
        <div className="closeBTN">
          <Image
            src="/assets/icons/menu/x-close.svg"
            alt="logo"
            width={100}
            height={100}
            className='w-[100px] h-auto'
            priority
            />
        </div>
        <div className="flex flex-col">
          <div className="logo">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className='w-[100px] h-auto'
              priority
            />
          </div>
          <div className="menu_items">
            <Link 
              className="menu_item"
              href="/home"
            >
              <Image
                src="/assets/icons/menu/home.svg"
                alt="logo"
                width={100}
                height={100}
                className='w-[100px] h-auto menu-icon'
                priority
              /> Inicio
            </Link>
            <Link 
              className="menu_item"
              href="/anesthesia/register"
            >
              <Image
                src="/assets/icons/menu/activity-heart.svg"
                alt="logo"
                width={100}
                height={100}
                className='w-[100px] h-auto menu-icon'
                priority
              /> Nueva Hoja de Anestesia
            </Link>
            <Link 
              className="menu_item"
              href="/hospitals/search"
            >
              <Image
                src="/assets/icons/menu/building.svg"
                alt="logo"
                width={100}
                height={100}
                className='w-[100px] h-auto menu-icon'
                priority
              /> Registro de Hospitales
            </Link>
            <Link 
              className="menu_item"
              href="/patients/register"
            >
              <Image
                src="/assets/icons/menu/edit.svg"
                alt="logo"
                width={100}
                height={100}
                className='w-[100px] h-auto menu-icon'
                priority
              /> Registro de Pacientes
            </Link>
            <Link 
              className="menu_item"
              href="/checklist"
            >
              <Image
                src="/assets/icons/menu/check.svg"
                alt="logo"
                width={100}
                height={100}
                className='w-[100px] h-auto menu-icon'
                priority
              /> Checklist
            </Link>
            <Link 
              className="menu_item"
              href="/profile"
            >
              <Image
                src="/assets/icons/menu/user.svg"
                alt="logo"
                width={100}
                height={100}
                className='w-[100px] h-auto menu-icon'
                priority
              /> Mi Cuenta
            </Link>
          </div>
          <div className="menu_footer">
            <div className="help menu_item">
              <Link href="/help">
                <Image
                  src="/assets/icons/menu/lifesaver.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className='w-[100px] h-auto menu-icon'
                  priority
                /> Ayuda
              </Link>
            </div>
            <Divider className="my-6" />
            <div className="user flex flex-row">
              <IconContainerCircle classes="" icon="user" />
              <div className="user_info">
                <p className="name">Natalia Quiros</p>
                <p className="email">natalia@vets4vets.com</p>
              </div>
              <div className="logout ml-auto">
                <Image
                  src="/assets/icons/menu/exit.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className='w-[100px] h-auto'
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
