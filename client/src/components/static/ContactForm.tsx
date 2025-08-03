// Components.
import { Button } from '../shadcn/button';
import { Input } from '../shadcn/input';
import { Textarea } from '../shadcn/textarea';
import { FaCircleArrowRight } from 'react-icons/fa6';

// This component is only used inside of landing page for emailing the creator directly.
export default function ContactForm() {
  return (
    <form className="max-w-[480px] flex-1 space-y-4">
      <Input name="firstname" placeholder="First Name" />
      <Input name="lastname" placeholder="Last Name" />

      <Input name="email" placeholder="Email" />
      <Textarea name="message" placeholder="Your message..." className="h-36 resize-none" />
      <Button className="w-full space-x-4">
        <span className="font-bold">Send Message </span>
        <FaCircleArrowRight />
      </Button>
    </form>
  );
}
