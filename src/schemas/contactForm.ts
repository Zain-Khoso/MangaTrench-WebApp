// Lib Imports.
import z from 'zod';

// Utils Imports.
import { email, firstname, lastname, message } from './index';

// Landing page contact form's schema object and it's type.
const ContactFormSchema = z.object({
  email,
  firstname,
  lastname,
  message,
});

type ContactFormSchemaT = z.infer<typeof ContactFormSchema>;

// Exports.
export { ContactFormSchema, type ContactFormSchemaT };
