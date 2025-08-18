'use client';

// Lib Imports.
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import axios from 'axios';

// Utils.
import { auth } from '@/utils/firebase';
import { isGuestOnlyRoute, isProtectedRoute } from '@/utils';

// This custom hook is used to update the authentication cookie.
export function useSessionCookie() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);

  const [user, isUserLoading, _] = useAuthState(auth);

  useEffect(() => {
    const handleCookie = async function () {
      setIsLoading(true);

      try {
        if (user) {
          const idToken = await user.getIdToken();

          const response = await axios.post('/api/cookies/session-create', { idToken });

          if (!response.data.success) throw new Error();

          if (isGuestOnlyRoute(pathname))
            return router.push(searchParams.get('redirect') || '/browse');
        } else {
          const response = await axios.post('/api/cookies/session-remove');

          if (!response.data.success) throw new Error();

          if (isProtectedRoute(pathname))
            return router.push(searchParams.get('redirect') || '/browse');
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (!isUserLoading) handleCookie();
  }, [user, isUserLoading]);

  return isLoading || isUserLoading;
}
