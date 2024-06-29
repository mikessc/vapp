'use client';
import React from 'react';
import {
  Link
} from '@nextui-org/react';
import Image from 'next/image';

const MainMenu: React.FC = () => {
  return (
    <>
      <div id="main_menu">
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
            <Link className="menu_item">
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className='w-[100px] h-auto'
                priority
              /> Inicio
            </Link>
          </div>
          <div className="help">
            <Link>
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className='w-[100px] h-auto'
                priority
              /> Ayuda
            </Link>
          </div>
          <div className="user flex flex-row">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className='w-[100px] h-auto'
              priority
            />
            <div className="user_info">
              <p className="name">Natalia Quiros</p>
              <p className="email">natalia@vets4vets.com</p>
            </div>
            <div className="logout">
              <Image
                src="/assets/logo.svg"
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
    </>
  );
};

export default MainMenu;
