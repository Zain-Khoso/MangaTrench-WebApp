'use client';

// Lib Imports.
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';

// Utils.
import { auth } from '@/utils/firebase';

// Hooks.
import { useSessionCookie } from '@/hooks/useSessionCookie';

// Components.
import { Button, ButtonLink } from '../shadcn/button';

// This component export action button for the static route group's Navbar.
export default function NavbarActions() {
  const _ = useSessionCookie();
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleSignOut = () =>
    toast.promise(signOut, {
      loading: 'Signing out.',
      error: 'Something went wrong.',
      success: 'Signout Successfully.',
    });

  if (user)
    return (
      <div className="flex gap-2">
        <Button onClick={handleSignOut} variant="ghost">
          Logout
        </Button>

        <ButtonLink href="/browse" variant="secondary">
          Browse
        </ButtonLink>
      </div>
    );

  return (
    <ButtonLink href="/sign-in" variant="secondary">
      Sign In
    </ButtonLink>
  );
}
