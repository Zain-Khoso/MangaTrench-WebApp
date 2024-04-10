// Lib Imports.
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full px-8 py-4 bg-teal-600 flex items-center justify-between">
      <h2 className="text-3xl font-bold">
        <Link href="/">Manga Trench</Link>
      </h2>
    </nav>
  );
}
