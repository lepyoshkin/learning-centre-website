import React from 'react';

import {Logo} from '@/components/logo';
import {Navbar} from './navbar';
import {MobileSidebar} from './mobile-sidebar';

export const Header = () => {
  return (
    <header className="flex justify-between items-center pr-6 py-8  md:pr-20 md:pl-10 md:py-14">
      <Logo />
      <nav className="hidden lg:flex w-[770px]">
        <Navbar />
      </nav>
      <nav className="lg:hidden">
        <MobileSidebar />
      </nav>
    </header>
  );
};
