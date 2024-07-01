import {useState} from 'react';

const useNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsNavOpen((prevIsNavOpen) => !prevIsNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return {isNavOpen, toggleNav, closeNav};
};

export default useNavigation;
