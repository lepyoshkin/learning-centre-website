import React from 'react';
import Image from 'next/image';
import srcLogo from '@/public/logo.png';

export const Logo = () => {
  return (
    <Image src={srcLogo} alt="logo learning centre" width={155} height={105} />
  );
};
