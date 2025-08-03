// Lib Imports.
import Link from 'next/link';
import Image from 'next/image';

// Assets.
import BrandLogo from '@/assets/brand/logo.png';
import { FaMagnifyingGlassArrowRight } from 'react-icons/fa6';

// Components.
import { H1, H4, P } from '@/components/shadcn/typography';
import { Button, ButtonLink } from '@/components/shadcn/button';
import TextHighlight from '@/components/TextHighlight';
import ThemeToggler from '@/components/ThemeToggler';

// Types.
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

// Metadata.
export const metadata: Metadata = {
  title: 'Home',
};

// This layout is used in all statically generated pages.
export default function StaticLayout({ children }: PropsWithChildren) {
  return (
    <>
      <header className="bg-secondary flex h-fit max-h-[820px] w-full flex-col gap-8 pb-8 md:h-dvh xl:max-h-none xl:gap-12">
        <div className="h-[80px] w-full sm:h-[120px] md:h-[150px] xl:h-[180px] 2xl:h-[200px]">
          <nav className="bg-primary fixed top-0 left-0 z-[1000] h-fit w-full overflow-hidden">
            {/* Navbar Items */}
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between p-2 md:px-4 md:py-8">
              {/* Brand Logo */}
              <Link href="/">
                <Image
                  alt="Brand Logo"
                  src={BrandLogo}
                  className="h-[64px] w-[64px] xl:h-[80px] xl:w-[80px]"
                />
              </Link>

              <div className="flex items-center gap-8">
                <ul className="hidden items-center gap-4 md:flex">
                  <li>
                    <Link
                      href="/#home"
                      className="text-foreground/65 hover:text-foreground font-bold"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#trending"
                      className="text-foreground/65 hover:text-foreground font-bold"
                    >
                      Trending
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#featured"
                      className="text-foreground/65 hover:text-foreground font-bold"
                    >
                      Featured
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#browse"
                      className="text-foreground/65 hover:text-foreground font-bold"
                    >
                      Browse
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      className="text-foreground/65 hover:text-foreground font-bold"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#creator"
                      className="text-foreground/65 hover:text-foreground font-bold"
                    >
                      Creator
                    </Link>
                  </li>
                </ul>

                <ThemeToggler />

                <Button variant="secondary">Sign In</Button>
              </div>
            </div>
          </nav>
        </div>

        <section
          id="home"
          className="w-full flex-1 scroll-m-48 space-y-2 px-2 md:px-8 xl:space-y-12 2xl:mx-auto 2xl:max-w-[1440px]"
        >
          <H1>
            Find, Rate, and Talk <TextHighlight>Manga</TextHighlight> — All in One{' '}
            <TextHighlight>Trench</TextHighlight>.
          </H1>

          <P>
            Discover thousands of manga, share your thoughts, and connect with fans worldwide — all
            from your personal manga hub.
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
      </header>

      {children}

      <footer className="bg-secondary">
        <div className="flex items-center justify-between p-4 2xl:mx-auto 2xl:max-w-[1440px]">
          <Link href="/">
            <Image alt="Manga Trench" src={BrandLogo} width={48} height={48} />
          </Link>

          <ul className="flex items-center gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/browse">Browse</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/disclaimer">Disclaimer</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
