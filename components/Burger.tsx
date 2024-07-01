import React from 'react';

type BurgerProps = {
  isNavOpen: boolean;
  toggleNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const Burger: React.FC<BurgerProps> = ({isNavOpen, toggleNav}) => {
  return (
    <div
      onClick={() => toggleNav(!isNavOpen)}
      className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
    >
      {isNavOpen ? <div>open</div> : <div>closed</div>}
    </div>
  );
};

export default Burger;
