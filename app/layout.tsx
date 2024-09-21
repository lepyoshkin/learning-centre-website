import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';
import {Header} from '@/app/components/header';
import {Footer} from '@/app/components/footer';

const patrickHand = localFont({
  src: './fonts/Patrick_Hand/PatrickHand-Regular.ttf',
  variable: '--font-patrick-hand',
  weight: '400',
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
      <body className={` ${patrickHand.variable} antialiased`}>
        <Header />
        <main className="container mx-auto"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
