// app/components/ThemeSwitcher.tsx
'use client';
import Image from 'next/image';

interface IconContainerProps {
  classes: string;
  icon: string;
}

const IconContainer: React.FC<IconContainerProps> = ({ classes, icon }) => {
  return (
    <div className={`icon_container ${classes}`}>
      <Image
        src={`/assets/icons/${icon}.svg`}
        alt="logo"
        width={22}
        height={22}
        priority
      />
    </div>
  );
}

export default IconContainer;