// Lib Imports.
import Link from 'next/link';

// Components.
import Navbar from '@/components/static/Navbar';
import HeaderUIContainer from '@/components/static/HeaderUIContainer';
import Footer from '@/components/static/Footer';
import Illustration from '@/components/svgs/404';
import TextHighlight from '@/components/TextHighlight';
import { H1, P } from '@/components/shadcn/typography';

// 404 page for the entire application.
export default async function NotFound() {
  return (
    <>
      <Navbar />

      <HeaderUIContainer>
        <H1>Page Not Found</H1>

        <div className="grid place-items-center">
          <Illustration />
        </div>

        <P>
          Looks like the page you are trying to access, does not exist. <br /> Go back to{' '}
          <Link href="/">
            <TextHighlight>Home Page</TextHighlight>
          </Link>
          .
        </P>
      </HeaderUIContainer>

      <Footer />
    </>
  );
}
