// Assets.
import { FaMagnifyingGlassArrowRight } from 'react-icons/fa6';

// Components.
import { H1, P, H4 } from '../shadcn/typography';
import { ButtonLink, Button } from '../shadcn/button';
import TextHighlight from '../TextHighlight';

// This componet holds the UI for Hero Section of Landing Page.
export default function HeroSection() {
  return (
    <>
      <H1>
        Find, Rate, and Talk <TextHighlight>Manga</TextHighlight> — All in One{' '}
        <TextHighlight>Trench</TextHighlight>.
      </H1>

      <P>
        Discover thousands of manga, share your thoughts, and connect with fans worldwide — all from
        your personal manga hub.
      </P>

      <ul className="mt-8 hidden items-center justify-evenly gap-8 md:flex">
        <li className="flex w-full flex-col items-center gap-4">
          <div className="bg-secondary aspect-video w-full rounded-xl"></div>
          <H4 className="font-bold">Browse</H4>
        </li>
        <li className="flex w-full flex-col items-center gap-4">
          <div className="bg-secondary aspect-video w-full rounded-xl"></div>
          <H4 className="font-bold">Review</H4>
        </li>
        <li className="flex w-full flex-col items-center gap-4">
          <div className="bg-secondary aspect-video w-full rounded-xl"></div>
          <H4 className="font-bold">Chat AI</H4>
        </li>
      </ul>

      <div className="mt-12 flex items-center gap-4 md:mt-8">
        <ButtonLink href="/browse">
          Browse <FaMagnifyingGlassArrowRight />
        </ButtonLink>
        <Button variant="ghost">Sign In</Button>
      </div>
    </>
  );
}
