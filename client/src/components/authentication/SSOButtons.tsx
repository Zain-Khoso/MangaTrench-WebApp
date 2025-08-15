'use client';

// Lib Imports.
import { useState } from 'react';
import {
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  AuthProvider as AuthProviderT,
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

// Component Data.
const SSOs = [
  {
    icon: FcGoogle,
    label: 'Google',
    provider: new GoogleAuthProvider(),
    className: '',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    provider: new GithubAuthProvider(),
    className: 'fill-foreground',
  },
  {
    icon: FaXTwitter,
    label: 'Twitter',
    provider: new TwitterAuthProvider(),
    className: 'fill-foreground',
  },
];

// This is a special button, used only for SSO sign in options.
export default function SSOButtons() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async function (AuthProvider: AuthProviderT) {
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

      {SSOs.map(({ icon: Icon, className, label, provider }) => (
        <li key={label + '-sso-option'}>
          <ArrowAnimationButton
            variant="secondary"
            icon={Icon}
            iconClasses={className}
            label={'Continue with ' + label}
            onClick={() => handleClick(provider)}
          />
        </li>
      ))}
    </>
  );
}
