// Lib Imports.
import Link from 'next/link';

// Components.
import { H1, P } from '../shadcn/typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/shadcn/accordion';
import TextHighlight from '../TextHighlight';

// This component holds the entire UI of the disclaimer page.
export default function FAQ() {
  return (
    <section className="w-full flex-1 scroll-m-48 space-y-2 px-2 md:px-8 xl:space-y-12 2xl:mx-auto 2xl:max-w-[1440px]">
      <H1>Frequently Asked Questions</H1>

      <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold">What is Manga Trench?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <P>
              Manga Trench is a platform for discovering, rating, and reviewing manga. You can also
              bookmark titles for your “To-Read” list and get personalized recommendations.
            </P>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold">
            Can I read manga on Manga Trench?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <P>
              No. Manga Trench does not host or display manga chapters. We provide information,
              ratings, and reviews only.
            </P>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold">
            Where does the manga data come from?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <P>
              All manga information (titles, covers, descriptions, etc.) is sourced from public APIs
              like{' '}
              <Link href="https://kitsu.docs.apiary.io/#">
                <TextHighlight>Kitsu</TextHighlight>
              </Link>
              .
            </P>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-bold">
            Do I need an account to use Manga Trench?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <P>
              You can browse without an account, but you'll need to sign in to rate, review,
              bookmark manga, and access our AI chat bot.
            </P>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-bold">Is Manga Trench free to use?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <P>Yes! All features are free to use.</P>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="font-bold">
            Can I request a new manga to be added?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <P>
              Absolutely. Use our contact form to suggest titles, and we’ll review and add them if
              they meet our guidelines.
            </P>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="font-bold">
            What's the “Trending This Week” section?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <P>
              It shows the most popular manga on Manga Trench based on bookmarks and reviews over
              the past 7 days.
            </P>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="font-bold">How are reviews moderated?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <P>
              We encourage respectful, constructive reviews. Inappropriate or abusive content may be
              removed by admins.
            </P>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className="font-bold">
            Can I become an admin or contributor?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <P>
              Admin roles are given selectively to trusted users. If you're interested, contact us
              and share your experience.
            </P>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger className="font-bold">How do I delete my account?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <P>
              You can delete your account anytime from the settings page. All your bookmarks will be
              removed permanently. The reviews you wrote will still show up as anonymous reviews.
              The messages you sent will be in the respective chats as anonymous user.
            </P>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
