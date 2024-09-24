'use client';

import Link from 'next/link';
import React from 'react';
import {usePathname} from 'next/navigation';

const links = [
  {href: '/', label: 'Home'},
  {href: '/about-us', label: 'About Us'},
  {href: '/our-learning-resources', label: 'Our Learning Resources'},
  {href: '/success-stories', label: 'Success Stories'},
  {href: '/contact-us', label: 'Contact Us'},
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map(({href, label}) => (
        <Link key={href} href={href} className="flex-1">
          <span className={`${pathname === href ? 'text-red-500' : ''}`}>
            {label}
          </span>
        </Link>
      ))}
    </>
  );
};
