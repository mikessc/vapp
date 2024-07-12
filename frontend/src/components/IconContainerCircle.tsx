// app/components/ThemeSwitcher.tsx
'use client';
import Image from 'next/image';

interface IconContainerProps {
  classes: string;
  icon: string;
}

const IconContainerCircle: React.FC<IconContainerProps> = ({ classes, icon }) => {
  return (
    <div className={`icon_container_circle ${classes}`}>
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

export default IconContainerCircle;