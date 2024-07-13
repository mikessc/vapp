'use client';
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Avatar,
  Button,
} from '@nextui-org/react';
import Image from 'next/image';

const NavBarComponent: React.FC = () => {
  const toggleMenu = () => {
    const menuElement = document.getElementById('main_menu');
    
    if (menuElement) {
      menuElement.classList.toggle('closed');
    } else {
      console.error('Element with ID "main_menu" not found.');
    }
  };

  return (
    <Navbar
      maxWidth="full"
      position="sticky"
      className="navigation bg-white w-screen"
    >
      <NavbarBrand>
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={100}
          height={100}
          className='w-[100px] h-auto'
          priority
        />
      </NavbarBrand>
      <NavbarContent justify="end" className="justify-end">
        <Button
          radius='none'
          size='sm'
          className='text-black shrink-0 bg-white'
          onClick={toggleMenu}
        >
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={40}
            height={40}
            className='w-[40px] h-auto'
            priority
          />
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBarComponent;
