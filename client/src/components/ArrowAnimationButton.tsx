'use client';

// Lib Imports.
import Link from 'next/link';

// Assets.
import { FaArrowRight } from 'react-icons/fa6';

// Components.
import { Button } from './shadcn/button';

// Types.
import { IconType } from 'react-icons';
type Props = {
  variant?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | null;
  onClick: (() => void) | (() => Promise<void>);
  icon: IconType;
  iconClasses?: string;
  label: string;
};

// This component is link any button But with right arrow animation.
export default function ArrowAnimationButton({
  variant,
  onClick,
  icon: Icon,
  iconClasses,
  label,
}: Props) {
  return (
    <Button
      variant={variant}
      className="group flex w-full items-center justify-between"
      onClick={onClick}
    >
      <Icon className={iconClasses} />

      <span>{label}</span>

      <div className="h-4 w-4">
        <FaArrowRight className="-translate-x-2 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-80" />
      </div>
    </Button>
  );
}
