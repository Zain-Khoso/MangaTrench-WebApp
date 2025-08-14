'use client';

// Lib Imports.
import { useState } from 'react';
import {
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
} from 'firebase/auth';
import toast from 'react-hot-toast';

// Utils.
import { auth } from '@/utils/firebase';

// Assets.
import { FaXTwitter, FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

// Components.
import Spinner from '../Spinner';
import ArrowAnimationButton from '../ArrowAnimationButton';

// Types.
type Props = {
  provider: 'google' | 'github' | 'twitter';
};

// Component Data.
const SSOs = {
  google: {
    icon: FcGoogle,
    label: 'Google',
    provider: new GoogleAuthProvider(),
    className: '',
  },
  github: {
    icon: FaGithub,
    label: 'GitHub',
    provider: new GithubAuthProvider(),
    className: 'fill-foreground',
  },
  twitter: {
    icon: FaXTwitter,
    label: 'Twitter',
    provider: new TwitterAuthProvider(),
    className: 'fill-foreground',
  },
};

// This is a special button, used only for SSO sign in options.
export default function SSOButton({ provider }: Props) {
  const [isLoading, setIsLoading] = useState(false);

  const { icon: Icon, className, label, provider: AuthProvider } = SSOs[provider];

  const handleClick = async function () {
    const signUp = () => signInWithPopup(auth, AuthProvider);

    try {
      setIsLoading(true);

      await toast.promise(signUp, {
        loading: 'Signing Up',
        error: 'Something went wrong',
        success: 'Welcome! 🙂',
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? <Spinner /> : <></>}
      <ArrowAnimationButton
        variant="secondary"
        icon={Icon}
        iconClasses={className}
        label={'Continue with ' + label}
        onClick={handleClick}
      />
    </>
  );
}
