import React from 'react';
import Link from 'next/link';

type LinkItem = {
  id: number;
  link: string;
};

type NavigationLinksProps = {
  links: LinkItem[];
};

const NavigationLinks: React.FC<NavigationLinksProps> = ({links}) => {
  return (
    <ul className="hidden md:flex">
      {links.map(({id, link}) => (
        <li
          key={id}
          className="px-4 cursor-pointer capitalize font-medium text-gray-500"
        >
          <Link href={`/${link}`}>{link}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavigationLinks;
