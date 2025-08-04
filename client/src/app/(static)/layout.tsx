// Components.
import Navbar from '@/components/static/Navbar';
import Footer from '@/components/static/Footer';

// Types.
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

// Metadata.
export const metadata: Metadata = {
  title: 'Home',
};

// This layout is used in all statically generated pages.
export default function StaticLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}
