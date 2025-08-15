// Lib Imports.
import z from 'zod';

// Utils Imports.
import { deleteString } from './index';

// User deletion confirmation form's schema object and it's type.
const DeleteAccountFormSchema = z.object({
  deleteString,
});

type DeleteAccountFormSchemaT = z.infer<typeof DeleteAccountFormSchema>;

// Exports.
export { DeleteAccountFormSchema, type DeleteAccountFormSchemaT };
