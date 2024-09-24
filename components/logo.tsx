import Image from 'next/image';

export const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt="logo learning centre"
      width={155}
      height={105}
    />
  );
};
