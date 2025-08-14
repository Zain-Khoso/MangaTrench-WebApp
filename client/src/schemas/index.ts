// Lib Imports.
import z from 'zod';
import { isStrongPassword } from 'validator';

// Form Fields.
const email = z.email({ error: 'Invalid email.' });
const username = z
  .string()
  .trim()
  .min(4, 'Username must be at least 4 characters.')
  .max(20, 'Username must be at most 20 characters.')
  .regex(/^[a-zA-Z0-9_-]+$/, {
    message: 'Only letters, numbers, underscores, and hyphens are allowed.',
  });
const firstname = z
  .string()
  .trim()
  .min(0, { error: 'First name is required.' })
  .min(4, { error: 'First name must be at least 4 characters.' })
  .max(16, { error: "First name can't exceed 16 characters." });
const lastname = z.string().trim().max(16, { error: "Last name can't exceed 16 characters." });
const message = z
  .string()
  .trim()
  .min(0, { error: 'Message is required.' })
  .min(20, { error: 'Message must be at least 20 characters.' })
  .max(250, { error: "Message can't exceed 250 characters." });
const password = z
  .string()
  .min(1, 'Password is required')
  .max(40, "password can't exceed 16 characters.")
  .refine((password) => isStrongPassword(password), 'Password is too weak.');

// General Schema Exports.
export { email, username, firstname, lastname, message, password };
