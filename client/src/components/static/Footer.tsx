// Lib Imports.
import Link from 'next/link';
import Image from 'next/image';

// Assets.
import BrandLogo from '@/assets/brand/logo.png';

// Footer for static route group.
export default function () {
  return (
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
  );
}
