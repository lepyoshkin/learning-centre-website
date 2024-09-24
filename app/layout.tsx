import type {Metadata} from 'next';
import './globals.css';
import {Poppins, Patrick_Hand, Inter} from 'next/font/google';
import {Header} from '@/components/header';
import {Footer} from '@/components/footer';
import {Sidebar} from '@/components/sidebar';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400'],
});

const patrickHand = Patrick_Hand({
  subsets: ['latin'],
  variable: '--font-patrickHand',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Success GateWay LC',
  description: 'Success Gateway Learning Centre. The Beacon Centre',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  ${poppins.variable} ${patrickHand.variable}`}
      >
        <Header />
        <Sidebar className="hidden" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
