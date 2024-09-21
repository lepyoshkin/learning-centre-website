import {Logo} from '@/app/ui/logo';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/about-us">About Us</Link>
        <Link href="/our-learning-resources">Our Learning Resources</Link>
        <Link href="/success-stories">Success Stories</Link>
        <Link href="/contact-us">Contact Us</Link>
      </nav>
    </header>
  );
};
