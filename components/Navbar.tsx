'use client';

import React, {useState} from 'react';
import Logo from './Logo';
import Burger from './Burger';
import NavigationLinks from './NavigationLinks';
import MobileMenu from './MobileMenu';
import useNavigation from '@/hooks/useNavigation';

const Navbar = () => {
  // const [isNavOpen, toggleNav] = useState<boolean>(false);

  const {isNavOpen, toggleNav, closeNav} = useNavigation();

  const links = [
    {id: 1, link: 'home'},
    {id: 2, link: 'about us'},
    {id: 3, link: 'our learning resources'},
    {id: 4, link: 'success stories'},
    {id: 5, link: 'contact us'},
  ];

  return (
    <div className="flex justify-between items-center w-full min-h-[156px]  text-white fixed bg-white">
      <Logo />

      <NavigationLinks links={links} />

      <Burger isNavOpen={isNavOpen} toggleNav={toggleNav} />

      <MobileMenu isNavOpen={isNavOpen} links={links} closeNav={closeNav} />
    </div>
  );
};

export default Navbar;
