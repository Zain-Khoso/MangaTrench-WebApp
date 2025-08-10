'use client';

// Lib Imports.
import { usePathname, useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';

// Utils.
import { auth } from '@/utils/firebase';

// Components.
import { H1 } from '../shadcn/typography';

// Component to dynamically change page name inside authentication layout.
export default function PageLabel() {
  const router = useRouter();
  const pathname = usePathname();

  const [user] = useAuthState(auth);

  if (user) router.push('/');

  return (
    <H1>{pathname === '/sign-up' ? 'Sign Up' : pathname === '/sign-in' ? 'Sign In' : 'Auth'}</H1>
  );
}
