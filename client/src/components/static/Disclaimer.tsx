// Lib Imports.
import Link from 'next/link';

// Components.
import { H1, P } from '../shadcn/typography';
import TextHighlight from '@/components/TextHighlight';

// This component holds the entire UI of the disclaimer page.
export default function Disclaimer() {
  return (
    <section className="w-full flex-1 scroll-m-48 space-y-2 px-2 md:px-8 xl:space-y-12 2xl:mx-auto 2xl:max-w-[1440px]">
      <H1>Disclaimer</H1>

      <P>
        Manga Trench is a fan-made platform created to help manga enthusiasts discover, rate, and
        review manga titles. We do not host or display any manga chapters or copyrighted content.
        All manga metadata—including titles, cover images, and basic descriptions—is sourced from
        public APIs such as{' '}
        <Link href="https://kitsu.docs.apiary.io/#">
          <TextHighlight>Kitsu</TextHighlight>
        </Link>
        , and is used solely for informational and review purposes. We do not claim ownership or
        rights to any manga titles, artwork, characters, or trademarks featured on this website. All
        intellectual property belongs to their respective owners. If you are a copyright holder and
        have concerns about your content appearing on this site, please{' '}
        <Link href="mailto:zain.khoso.dev@gmail.com">
          <TextHighlight>contact us</TextHighlight>
        </Link>
        , and we will address your request promptly.
      </P>
    </section>
  );
}
