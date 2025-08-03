// Assets.
import { FaMagnifyingGlassArrowRight } from 'react-icons/fa6';

// Components.
import { H1, P, H4 } from '../shadcn/typography';
import { ButtonLink, Button } from '../shadcn/button';
import TextHighlight from '../TextHighlight';

// This componet holds the UI for Hero Section of Landing Page.
export default function HeroSection() {
  return (
    <section
      id="home"
      className="w-full flex-1 scroll-m-48 space-y-2 px-2 md:px-8 xl:space-y-12 2xl:mx-auto 2xl:max-w-[1440px]"
    >
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
          <div className="bg-background aspect-video w-full rounded-xl"></div>
          <H4>Browse</H4>
        </li>
        <li className="flex w-full flex-col items-center gap-4">
          <div className="bg-background aspect-video w-full rounded-xl"></div>
          <H4>Review</H4>
        </li>
        <li className="flex w-full flex-col items-center gap-4">
          <div className="bg-background aspect-video w-full rounded-xl"></div>
          <H4>Chat AI</H4>
        </li>
      </ul>

      <div className="mt-12 flex items-center gap-4 md:mt-8">
        <ButtonLink href="/browse">
          Browse <FaMagnifyingGlassArrowRight />
        </ButtonLink>
        <Button variant="secondary">Sign In</Button>
      </div>
    </section>
  );
}
