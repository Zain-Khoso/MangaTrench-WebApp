// Lib Imports.
import z from 'zod';

// Utils Imports.
import { email, password } from './index';

// User sign-up form's schema object and it's type.
const SignUpFormSchema = z
  .object({
    email,
    password,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: 'Passwords do not match',
    path: ['confirmPassword'],
  });

type SignUpFormSchemaT = z.infer<typeof SignUpFormSchema>;

// Exports.
export { SignUpFormSchema, type SignUpFormSchemaT };
