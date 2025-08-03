// Lib Imports.
import { headers } from 'next/headers';
import Link from 'next/link';
import Image from 'next/image';

// Assets.
import BrandLogo from '@/assets/brand/logo.png';

// Components.
import { Button } from '@/components/shadcn/button';
import ThemeToggler from '@/components/ThemeToggler';
import HeroSection from '@/components/static/HeroSection';
import Disclaimer from '@/components/static/Disclaimer';
import FAQ from '@/components/static/FAQ';
import Footer from '@/components/static/Footer';
import Header from '@/components/static/Header';

// Types.
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

// Metadata.
export const metadata: Metadata = {
  title: 'Home',
};

// This layout is used in all statically generated pages.
export default async function StaticLayout({ children }: PropsWithChildren) {
  const headersList = await headers();
  const pathname = headersList.get('custom-pathname');

  return (
    <>
      <Header>
        {pathname === '/' ? (
          <HeroSection />
        ) : pathname === '/disclaimer' ? (
          <Disclaimer />
        ) : pathname === '/faq' ? (
          <FAQ />
        ) : (
          <></>
        )}
      </Header>

      {children}

      <Footer pathname={pathname || '/'} />
    </>
  );
}
