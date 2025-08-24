// Lib Imports.
import { Suspense } from 'react';

// Components.
import DeleteAccountPageUI from '@/components/authentication/DeleteAccountPageUI';

// Types.
import { Metadata } from 'next';

// Metadata.
export const metadata: Metadata = {
  title: 'Delete Account',
  description:
    'Permanently delete your Manga Trench account and all associated data, including reviews, bookmarks, and profile information. This action cannot be undone.',
  keywords: [
    'delete Manga Trench account',
    'remove manga account',
    'delete user profile',
    'account deletion',
    'manga reviews account removal',
    'Manga Trench data removal',
  ],
};

// This page handles user account deletion.
export default function DeleteAccountPage() {
  return (
    <Suspense>
      <DeleteAccountPageUI />
    </Suspense>
  );
}
