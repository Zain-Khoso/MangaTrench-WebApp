// Components.
import Navbar from '@/components/static/Navbar';
import Footer from '@/components/static/Footer';

// Types.
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

// Metadata.
export const metadata: Metadata = {
  title: {
    absolute: 'Manga Trench',
  },
  description: 'Explore helpful pages like FAQ and Disclaimer at Manga Trench.',
  keywords: ['FAQ', 'disclaimer', '404', 'support'],
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
