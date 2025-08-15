// Lib Imports.
import Image from 'next/image';

// Assets.
import Logo from '@/assets/brand/logo.png';

// Components.
import PageLabel from '@/components/authentication/PageLabel';
import TogglePage from '@/components/authentication/TogglePage';

// Types.
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

// Metadata.
export const metadata: Metadata = {
  title: {
    template: '%s | Manga Trench',
    default: 'Manga Trench',
  },
  description:
    'Sign in or sign up to Manga Trench to explore, review, and bookmark your favorite manga. Your manga journey starts here.',
  keywords: [
    'manga trench login',
    'manga trench sign up',
    'manga reviews',
    'manga discovery',
    'anime manga platform',
    'manga community',
    'manga database',
    'read manga reviews',
    'join manga trench',
  ],
};

// This layout is used for all authentication pages.
export default function AuthentucationLayout({ children }: PropsWithChildren) {
  return (
    <main className="md:bg-secondary flex h-dvh min-h-fit w-dvw flex-col gap-12 px-4 py-8 md:m-auto md:h-fit md:w-4/5 md:flex-row md:items-center md:justify-between md:rounded-4xl md:px-12 lg:max-w-4xl">
      <header className="space-y-4">
        <Image alt="Manga Trench Logo" src={Logo} width={80} height={80} />

        <PageLabel />

        <TogglePage />
      </header>

      {children}
    </main>
  );
}
