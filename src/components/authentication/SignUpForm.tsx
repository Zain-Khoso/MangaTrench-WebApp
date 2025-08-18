'use client';

// Lib Imports.
import { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
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
  FormDescription,
} from '@/components/shadcn/form';
import Spinner from '../Spinner';

// Types & Schemas.
import { SignUpFormSchema, type SignUpFormSchemaT } from '@/schemas/signUpForm';
type Props = {
  prevStep: () => void;
};

// This is a form component that is used to create new email and password users.
export default function SignUpForm({ prevStep }: Props) {
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);

  const [registerUser, _, isRegistering, registrationError] =
    useCreateUserWithEmailAndPassword(auth);

  // RHF Setup.
  const form = useForm<SignUpFormSchemaT>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    if (!registrationError) return;

    if (registrationError.code === 'auth/email-already-in-use')
      form.setError('email', { message: 'Email already in use.' });
  }, [registrationError]);

  const onSubmit: SubmitHandler<SignUpFormSchemaT> = async function (data) {
    const { email, password } = data;

    const handleSignUp = async function () {
      const response = await registerUser(email, password);

      if (response === undefined) throw new Error();
    };

    await toast.promise(handleSignUp, {
      loading: 'Creating a User...',
      error: 'Something went wrong.',
      success: 'New User Created.',
    });
  };

  const togglePassword = () => setSeePassword((val) => !val);
  const toggleConfirmPassword = () => setSeeConfirmPassword((val) => !val);

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
                <FormDescription>
                  Password must at least 8 characters long, and must contain a lowercase and
                  uppercase character, a number and a symbol.
                </FormDescription>
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
                  <div className="relative h-full w-full">
                    <Input
                      type={seeConfirmPassword ? 'text' : 'password'}
                      placeholder="********"
                      {...field}
                      className="pr-8"
                    />

                    {seeConfirmPassword ? (
                      <FaEyeSlash
                        size={16}
                        className="absolute top-1/2 right-0 -translate-1/2 cursor-pointer opacity-65"
                        onClick={toggleConfirmPassword}
                      />
                    ) : (
                      <FaEye
                        size={16}
                        className="absolute top-1/2 right-0 -translate-1/2 cursor-pointer opacity-65"
                        onClick={toggleConfirmPassword}
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
              Sign Up
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
