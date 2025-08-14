// Lib Imports.
import Link from 'next/link';
import Image from 'next/image';

// Assets.
import Logo from '@/assets/brand/logo.png';

// Components.
import { Separator } from '@/components/shadcn/separator';
import { P } from '@/components/shadcn/typography';
import SSOButton from '@/components/authentication/SSOButton';
import PageLabel from '@/components/authentication/PageLabel';
import TextHighlight from '@/components/TextHighlight';

// Types.
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import AuthActions from '@/components/authentication/AuthActions';

// Metadata.
export const metadata: Metadata = {
  title: {
    default: 'Manga Trench',
    template: '%s | Manga Trench',
  },
};

// This layout is used for all authentication pages.
export default function AuthentucationLayout({ children }: PropsWithChildren) {
  return (
    <main className="md:bg-secondary flex h-dvh min-h-fit w-dvw flex-col gap-12 px-4 py-8 md:m-auto md:h-fit md:w-4/5 md:flex-row md:items-center md:justify-between md:rounded-4xl md:px-12 lg:max-w-4xl">
      <header className="space-y-4">
        <Image alt="Manga Trench Logo" src={Logo} width={80} height={80} />

        <PageLabel />

        <P>
          Create your{' '}
          <Link href="/" className="hover:underline">
            <TextHighlight>Manga Trench</TextHighlight>
          </Link>{' '}
          account.
        </P>
      </header>

      <AuthActions />
    </main>
  );
}
