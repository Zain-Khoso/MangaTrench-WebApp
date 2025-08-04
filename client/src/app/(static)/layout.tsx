// Lib Imports.
import { headers } from 'next/headers';

// Components.
import Header from '@/components/static/Header';
import HeaderUIContainer from '@/components/static/HeaderUIContainer';
import HeroSection from '@/components/static/HeroSection';
import Disclaimer from '@/components/static/Disclaimer';
import FAQ from '@/components/static/FAQ';
import Footer from '@/components/static/Footer';

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
        <HeaderUIContainer id={pathname === '/' ? 'home' : undefined}>
          {pathname === '/' ? (
            <HeroSection />
          ) : pathname === '/disclaimer' ? (
            <Disclaimer />
          ) : pathname === '/faq' ? (
            <FAQ />
          ) : (
            <></>
          )}
        </HeaderUIContainer>
      </Header>

      {children}

      <Footer pathname={pathname || '/'} />
    </>
  );
}
