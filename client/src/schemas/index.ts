// Lib Imports.
import z from 'zod';

// Form Fields.
const email = z.email({ error: 'Invalid email.' });
const firstname = z
  .string()
  .trim()
  .min(0, { error: 'First name is required.' })
  .min(4, { error: 'First name must be at least 4 characters long.' })
  .max(16, { error: "First name can't exceed 16 characters." });
const lastname = z.string().trim().max(16, { error: "Last name can't exceed 16 characters." });
const message = z
  .string()
  .trim()
  .min(0, { error: 'Message is required.' })
  .min(20, { error: 'Message must be at least 20 characters long.' })
  .max(250, { error: "Message can't exceed 250 characters." });

// General Schema Exports.
export { email, firstname, lastname, message };
