import React from 'react';
import Link from 'next/link';

type LinkItem = {
  id: number;
  link: string;
};

type MobileMenuProps = {
  isNavOpen: boolean;
  links: LinkItem[];
  closeNav: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  isNavOpen,
  links,
  closeNav,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-[#081247] text-gray-500 transform transition-transform ${
        isNavOpen ? 'translate-x-[20%]' : 'translate-x-full'
      }`}
    >
      <ul className="flex flex-col justify-center items-center">
        {links.map(({id, link}) => (
          <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <Link onClick={() => closeNav()} href={`/${link}`}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
