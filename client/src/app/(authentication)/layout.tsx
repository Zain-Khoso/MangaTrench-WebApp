// Lib Imports.
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
    <main className="h-dvh min-h-fit w-dvw space-y-12 px-4 py-8">
      <header className="space-y-4">
        <Image alt="Manga Trench Logo" src={Logo} width={80} height={80} />

        <PageLabel />

        <P>
          Create your <TextHighlight>Manga Trench</TextHighlight> account.
        </P>
      </header>

      <main className="space-y-6">
        <ul className="space-y-4">
          <li>
            <SSOButton provider="google" />
          </li>
          <li>
            <SSOButton provider="github" />
          </li>
          <li>
            <SSOButton provider="twitter" />
          </li>
          <li>
            <Separator className="bg-foreground/20 my-8" />
          </li>
          <li>
            <SSOButton provider="email" />
          </li>
        </ul>
      </main>
    </main>
  );
}
