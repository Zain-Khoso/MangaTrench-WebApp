// Lib Imports.
import Link from 'next/link';

// Components.
import { H2, P } from '../shadcn/typography';

// Types.
import { IconType } from 'react-icons';
type Props = {
  icon: IconType;
  title: string;
  subtitle: string;
  buttonLink?: string;
};

// This component is only used inside landing page to show a section heading.
export default function SectionHeader({ icon: Icon, title, subtitle, buttonLink }: Props) {
  return (
    <header>
      <div className="flex items-center gap-4">
        <Icon size={32} className="fill-primary" />

        <H2 className="mb-0 pb-0">{title}</H2>

        {buttonLink && (
          <Link href={buttonLink} className="text-primary ml-auto font-semibold">
            Browse
          </Link>
        )}
      </div>
      <P>{subtitle}</P>
    </header>
  );
}
