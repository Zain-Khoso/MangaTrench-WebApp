'use client';

// Lib Imports.
import {
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  EmailAuthProvider,
} from 'firebase/auth';
import toast from 'react-hot-toast';

// Utils.
import { auth } from '@/utils/firebase';

// Assets.
import { FaXTwitter, FaGithub, FaArrowRight } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { MdMail } from 'react-icons/md';

// Components.
import { Button } from '../shadcn/button';

// Types.
type Props = {
  provider: 'google' | 'github' | 'twitter' | 'email';
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
  email: {
    icon: MdMail,
    label: 'Email',
    provider: new EmailAuthProvider(),
    className: 'fill-foreground',
  },
};

// This is a special button, used only for SSO sign in options.
export default function SSOButton({ provider }: Props) {
  const { icon: Icon, className, label, provider: AuthProvider } = SSOs[provider];

  const handleClick = async function () {
    toast.promise(() => signInWithPopup(auth, AuthProvider), {
      loading: 'Signing Up',
      error: 'Something went wrong',
      success: 'Welcome! 🙂',
    });
  };

  return (
    <Button
      variant="secondary"
      className="group flex w-full items-center justify-between"
      onClick={handleClick}
    >
      <Icon className={className} />

      <span>Continue with {label}</span>

      <div className="h-4 w-4">
        <FaArrowRight className="-translate-x-2 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-80" />
      </div>
    </Button>
  );
}
