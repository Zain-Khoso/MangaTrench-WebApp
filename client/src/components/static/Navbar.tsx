// Lib Imports.
import Link from 'next/link';
import Image from 'next/image';

// Assets.
import BrandLogo from '@/assets/brand/logo.png';

// Components.
import ThemeToggler from '../ThemeToggler';
import NavbarActions from './NavbarActions';

// This component is the Navbar for the entire Static Route Group.
export default function Navbar() {
  return (
    <div className="bg-primary fixed top-0 left-0 z-[1000] h-fit w-full overflow-hidden">
      {/* Navbar Items */}
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between p-2 md:px-4 md:py-8">
        {/* Brand Logo */}
        <Link href="/#home">
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
                href="/#trending"
                className="text-foreground/65 hover:text-foreground dark:text-foreground/90 dark:hover:text-foreground font-bold"
              >
                Trending
              </Link>
            </li>
            <li>
              <Link
                href="/#featured"
                className="text-foreground/65 hover:text-foreground dark:text-foreground/90 dark:hover:text-foreground font-bold"
              >
                Featured
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className="text-foreground/65 hover:text-foreground dark:text-foreground/90 dark:hover:text-foreground font-bold"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                href="/#creator"
                className="text-foreground/65 hover:text-foreground dark:text-foreground/90 dark:hover:text-foreground font-bold"
              >
                Creator
              </Link>
            </li>
          </ul>

          <ThemeToggler />

          <NavbarActions />
        </div>
      </nav>
    </div>
  );
}
