// Lib Imports.
import { Suspense } from 'react';

// Components.
import DeleteAccountPageUI from '@/components/authentication/DeleteAccountPageUI';

// Types.
import { Metadata } from 'next';

// Metadata.
export const metadata: Metadata = {
  title: 'Sign In',
  description:
    'Sign in to your Manga Trench account to discover trending manga, read reviews, and manage your reading list.',
  keywords: [
    'manga trench sign in',
    'login manga trench',
    'manga reviews',
    'manga platform',
    'anime manga login',
    'join manga community',
    'manga trench account',
  ],
};

// This page handles user Sign Ins.
export default function SignInPage() {
  return (
    <Suspense>
      <DeleteAccountPageUI />
    </Suspense>
  );
}
