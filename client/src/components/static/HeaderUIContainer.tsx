import { PropsWithChildren } from 'react';

// Types.
type Props = PropsWithChildren & {
  id?: string;
};

// This component is a container for the UI after navbar inside header component of the static route group.
export default function HeaderUIContainer({ children, id = '' }: Props) {
  return (
    <section
      id={id}
      className="w-full flex-1 scroll-m-48 space-y-2 px-2 md:px-8 xl:space-y-12 2xl:mx-auto 2xl:max-w-[1440px]"
    >
      {children}
    </section>
  );
}
