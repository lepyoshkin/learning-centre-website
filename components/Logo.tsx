import Image from 'next/image';
import srcLogo from '@/public/logo.png';

export default function Logo() {
  return (
    <Image src={srcLogo} width={155} height={105} alt="logo learning centre" />
  );
}
