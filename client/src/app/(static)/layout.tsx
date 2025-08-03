// Lib Imports.
import { headers } from 'next/headers';
import Link from 'next/link';
import Image from 'next/image';

// Assets.
import BrandLogo from '@/assets/brand/logo.png';

// Components.
import { Button } from '@/components/shadcn/button';
import ThemeToggler from '@/components/ThemeToggler';
import HeroSection from '@/components/static/HeroSection';
import Disclaimer from '@/components/static/Disclaimer';

// Types.
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { cn } from '@/utils';

// Metadata.
export const metadata: Metadata = {
  title: 'Home',
};

// This layout is used in all statically generated pages.
export default async function StaticLayout({ children }: PropsWithChildren) {
  const headersList = await headers();
  const pathname = headersList.get('custom-pathname');

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

        {pathname === '/' ? <HeroSection /> : pathname === '/disclaimer' ? <Disclaimer /> : <></>}
      </header>

      {children}

      <footer className={cn('bg-secondary', pathname !== '/' ? 'mt-auto' : '')}>
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
