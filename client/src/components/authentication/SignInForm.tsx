'use client';

// Lib Imports.
import { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';

// Utils.
import { auth } from '@/utils/firebase';

// Assets.
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
import Spinner from '../Spinner';

// Types & Schemas.
import { SignInFormSchema, type SignInFormSchemaT } from '@/schemas/signInForm';
type Props = {
  prevStep: () => void;
};

// This is a form component that is used to log users in.
export default function SignInForm({ prevStep }: Props) {
  const [seePassword, setSeePassword] = useState(false);

  const [login, _, isLoggingIn, loginError] = useSignInWithEmailAndPassword(auth);

  // RHF Setup.
  const form = useForm<SignInFormSchemaT>({
    resolver: zodResolver(SignInFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (!loginError) return;

    if (loginError.code === 'auth/invalid-credential') {
      form.setError('email', {});
      form.setError('password', {});

      toast.error('Invalid Credentials');
    }
  }, [loginError]);

  const onSubmit: SubmitHandler<SignInFormSchemaT> = async function (data) {
    const { email, password } = data;

    const handleSignIn = async function () {
      const response = await login(email, password);

      if (response === undefined) throw new Error();
    };

    await toast.promise(handleSignIn, {
      loading: 'Signing User In...',
      error: 'Something went wrong.',
      success: 'User Sign In Successfull.',
    });
  };

  const togglePassword = () => setSeePassword((val) => !val);

  return (
    <>
      {isLoggingIn ? <Spinner /> : <></>}
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
                  <div className="relative h-full w-full">
                    <Input
                      type={seePassword ? 'text' : 'password'}
                      placeholder="********"
                      {...field}
                      className="pr-8"
                    />

                    {seePassword ? (
                      <FaEyeSlash
                        size={16}
                        className="absolute top-1/2 right-0 -translate-1/2 cursor-pointer opacity-65"
                        onClick={togglePassword}
                      />
                    ) : (
                      <FaEye
                        size={16}
                        className="absolute top-1/2 right-0 -translate-1/2 cursor-pointer opacity-65"
                        onClick={togglePassword}
                      />
                    )}
                  </div>
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
              Sign In
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
