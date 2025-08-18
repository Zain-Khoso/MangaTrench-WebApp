'use client';

// Lib Imports.
import { usePathname } from 'next/navigation';

// Components.
import { H1 } from '../shadcn/typography';

// Component to dynamically change page name inside authentication layout.
export default function PageLabel() {
  const pathname = usePathname();

  const pageTitle = pathname
    .slice(1)
    .split('-')
    .map((segment) => segment.slice(0, 1).toUpperCase() + segment.slice(1).toLowerCase())
    .join(' ');

  return <H1>{pageTitle}</H1>;
}
