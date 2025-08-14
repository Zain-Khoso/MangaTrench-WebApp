'use client';

// Lib Imports.
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Components.
import { P } from '../shadcn/typography';
import TextHighlight from '../TextHighlight';

// This component is used to change between the sign-in and sign-up pages.
export default function TogglePage() {
  const pathname = usePathname();

  return pathname === '/sign-in' ? (
    <P>
      Don&apos;t have an account yet?{' '}
      <Link href="/sign-up" className="hover:underline">
        <TextHighlight>Create One</TextHighlight>
      </Link>
    </P>
  ) : pathname === '/sign-up' ? (
    <P>
      Already have an account?{' '}
      <Link href="/sign-in" className="hover:underline">
        <TextHighlight>Sign In</TextHighlight>
      </Link>
    </P>
  ) : (
    <></>
  );
}
