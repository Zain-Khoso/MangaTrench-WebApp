'use client';

// Lib Imports.
import { usePathname } from 'next/navigation';

// Components.
import { H1 } from '../shadcn/typography';

// Component to dynamically change page name inside authentication layout.
export default function PageLabel() {
  const pathname = usePathname();

  return (
    <H1>{pathname === '/sign-up' ? 'Sign Up' : pathname === '/sign-in' ? 'Sign In' : 'Auth'}</H1>
  );
}
