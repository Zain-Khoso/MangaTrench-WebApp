'use client';

// Lib Imports
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Components.
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../shadcn/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../shadcn/form';
import { Button } from '../shadcn/button';
import { Input } from '../shadcn/input';

// Types & Schemas.
import { Dispatch, SetStateAction } from 'react';
import { DeleteAccountFormSchemaT, DeleteAccountFormSchema } from '@/schemas/deleteAccountForm';
type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  handleUserDeletion: () => Promise<void>;
};

// This is a dialog component to ask the user for confirming their account deletion.
export default function DeleteAccountDialog({ isOpen, setIsOpen, handleUserDeletion }: Props) {
  // RHF Setup.
  const form = useForm<DeleteAccountFormSchemaT>({
    resolver: zodResolver(DeleteAccountFormSchema),
    defaultValues: {
      deleteString: '',
    },
  });

  const onSubmit: SubmitHandler<DeleteAccountFormSchemaT> = async function () {
    form.reset();

    setIsOpen(false);

    await handleUserDeletion();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DialogContent className="space-y-8">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action is permanent. All your data will be erased and cannot be recovered.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex-1 space-y-8 md:w-full md:max-w-xs"
          >
            <FormField
              control={form.control}
              name="deleteString"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type &apos;DELETE&apos; here to confirm.</FormLabel>
                  <FormControl>
                    <Input placeholder="DELETE" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="flex-1 gap-4">
              Confirm
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
