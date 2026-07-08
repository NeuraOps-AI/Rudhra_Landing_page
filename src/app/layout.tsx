import type { Metadata } from 'next';
import type { ReactNode } from 'react';
// @ts-ignore: side-effect import for global css
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { StartupAnimation } from '@/components/layout/StartupAnimation';

export const metadata: Metadata = {
  title: 'Rudhra Harmony | Thoughtfully Planned Homes',
  description:
    'Rudhra Harmony is a modern home and community experience by Rudhra Constructions, built around comfort, trust, and long-term family value.',
  icons: {
    icon: '/images/logos/rudhra-r-mark.png',
    shortcut: '/images/logos/rudhra-r-mark.png',
    apple: '/images/logos/rudhra-r-mark.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <StartupAnimation />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
