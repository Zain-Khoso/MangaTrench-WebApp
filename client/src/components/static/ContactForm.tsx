'use client';

// Lib Imports.
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import emailjs from 'emailjs-com';

// Assets.
import { FaCircleArrowRight } from 'react-icons/fa6';

// Components.
import { Button } from '../shadcn/button';
import { Input } from '../shadcn/input';
import { Textarea } from '../shadcn/textarea';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../shadcn/form';

// Types & Schemas.
import { ContactFormSchema, type ContactFormSchemaT } from '@/schemas/contactForm';

// This component is only used inside of landing page for emailing the creator directly.
export default function ContactForm() {
  // RHF Setup.
  const form = useForm<ContactFormSchemaT>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      email: '',
      firstname: '',
      lastname: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<ContactFormSchemaT> = async function (data) {
    const { email, firstname, lastname, message } = data;

    await toast.promise(
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          user_firstname: firstname,
          user_lastname: lastname,
          user_email: email,
          user_message: message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      ),
      {
        loading: 'Sending your email.',
        error: 'Something went wrong.',
        success: 'Email sent.',
      }
    );

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-[480px] flex-1 space-y-4">
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
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="I want a manga added ..."
                  className="h-36 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full gap-4">
          Send Message <FaCircleArrowRight />
        </Button>
      </form>
    </Form>
  );
}
