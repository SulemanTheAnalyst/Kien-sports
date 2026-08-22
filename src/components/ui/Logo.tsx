import React from 'react';
import kienMarkBlack from '../../assets/kien-mark-black.png';
import kienFullWhite from '../../assets/kien-full-white.png';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = { sm: 'h-6', md: 'h-8', lg: 'h-12', xl: 'h-33' };

export function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const src = variant === 'dark' ? kienMarkBlack : kienFullWhite;
  const alt = variant === 'dark' ? 'KIEN' : 'KIEN — Built For Performance';

  return (
    <img
      src={src}
      alt={alt}
      className={`${sizeMap[size]} w-auto object-contain`}
    />
  );
}