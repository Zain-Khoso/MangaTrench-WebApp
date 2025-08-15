// Components.
import SignUpPageUI from '@/components/authentication/SignUpPageUI';

// Types.
import { Metadata } from 'next';

// Metadata.
export const metadata: Metadata = {
  title: 'Sign Up',
  description:
    'Create a Manga Trench account and start exploring thousands of manga titles, leave reviews, and track your reading progress.',
  keywords: [
    'manga trench sign up',
    'create manga trench account',
    'join manga trench',
    'manga platform register',
    'anime manga signup',
    'manga reviews',
    'manga database',
  ],
};

// This page handles user registrations for the App.
export default function SignUpPage() {
  return <SignUpPageUI />;
}
