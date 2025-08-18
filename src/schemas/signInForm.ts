// Lib Imports.
import z from 'zod';

// Utils Imports.
import { email } from './index';

// User sign-in form's schema object and it's type.
const SignInFormSchema = z.object({
  email,
  password: z.string().trim().min(1, { error: 'Password cannot be empty.' }),
});

type SignInFormSchemaT = z.infer<typeof SignInFormSchema>;

// Exports.
export { SignInFormSchema, type SignInFormSchemaT };
