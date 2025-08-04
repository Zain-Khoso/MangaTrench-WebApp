// Lib Imports.
import Link from 'next/link';

// Components.
import Header from '@/components/static/Header';
import Footer from '@/components/static/Footer';
import Illustration from '@/components/svgs/404';
import TextHighlight from '@/components/TextHighlight';
import { P } from '@/components/shadcn/typography';

// 404 page for the entire application.
export default async function NotFound() {
  return (
    <>
      <Header>
        <div className="flex w-full flex-1 scroll-m-48 flex-col items-center space-y-2 px-2 md:px-8 xl:space-y-12 2xl:mx-auto 2xl:max-w-[1440px]">
          <Illustration />

          <P>
            Go back to{' '}
            <Link href="/">
              <TextHighlight>home page</TextHighlight>
            </Link>
            .
          </P>
        </div>
      </Header>

      <Footer pathname="404" />
    </>
  );
}
