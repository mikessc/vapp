import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__bar">
        <div className="bar__container mx-auto px-8 py-1 max-w-screen-lg flex justify-between">
          <span className="bar__text">
            2024 | Derechos Reservados
          </span>
          <span className="logo">
            <Image
              src="/assets/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className='h-[18px] w-auto'
              priority
            />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
