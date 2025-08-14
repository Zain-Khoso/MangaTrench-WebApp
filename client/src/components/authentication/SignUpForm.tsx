'use client';

// Lib Imports.
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

// Components.
import { Button } from '@/components/shadcn/button';
import { Input } from '@/components/shadcn/input';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/shadcn/form';

// Types & Schemas.
import { SignUpFormSchema, type SignUpFormSchemaT } from '@/schemas/signUpForm';
import { auth } from '@/utils/firebase';
import Spinner from '../Spinner';
type Props = {
  prevStep: () => void;
};

// This component holds a form which will ask a new user to enter their email and username.
export default function SignUpForm({ prevStep }: Props) {
  const [registerUser, _, isRegistering, __] = useCreateUserWithEmailAndPassword(auth);

  // RHF Setup.
  const form = useForm<SignUpFormSchemaT>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit: SubmitHandler<SignUpFormSchemaT> = async function (data) {
    const { email, password } = data;

    await toast.promise(() => registerUser(email, password), {
      loading: 'Creating a User...',
      error: 'Something went wrong.',
      success: 'New User Created.',
    });
  };

  return (
    <>
      {isRegistering ? <Spinner /> : <></>}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-1 space-y-4 md:w-full md:max-w-xs"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@mangatrench.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input placeholder="********" {...field} className="relative" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-8 flex gap-2">
            <Button variant="ghost" type="button" className="flex-1 gap-4" onClick={prevStep}>
              Back
            </Button>

            <Button type="submit" className="flex-1 gap-4">
              Sign Up
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
