'use client';

// Lib Imports.
import { useState } from 'react';
import { useDeleteUser } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';

// Utils.
import { auth } from '@/utils/firebase';

// Components.
import { P } from '../shadcn/typography';
import { Button } from '../shadcn/button';
import Spinner from '../Spinner';
import DeleteAccountDialog from './DeleteAccountDialog';

// This component holds the UI for user account deletions.
export default function DeleteAccountPageUI() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [deleteUser, isDeletingUser, userDeletionError] = useDeleteUser(auth);

  const handleUserDeletion = async function () {
    const deleteTheUser = async function () {
      const response = await deleteUser();

      if (response === false) throw new Error();
    };

    await toast.promise(deleteTheUser, {
      loading: 'Deleting your account...',
      error: 'Something went wrong.',
      success: 'Account Deleted.',
    });
  };

  const openDialog = () => setIsDialogOpen(true);

  return (
    <>
      {isDeletingUser ? <Spinner /> : <></>}

      <main className="space-y-6 md:w-full md:max-w-sm">
        <P>This action is permanent. All your data will be erased and cannot be recovered.</P>

        {userDeletionError ? (
          <P className="text-destructive">
            This action could not be performed. Please reauthentucate yourself to delete your
            account.
          </P>
        ) : (
          <></>
        )}

        <Button variant="destructive" onClick={openDialog}>
          Delete Account
        </Button>
      </main>

      <DeleteAccountDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        handleUserDeletion={handleUserDeletion}
      />
    </>
  );
}
