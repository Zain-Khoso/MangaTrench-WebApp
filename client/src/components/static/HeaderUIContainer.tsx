// Types.
import { PropsWithChildren } from 'react';
type Props = PropsWithChildren & {
  id?: string;
};

// This component is a container for the UI after navbar inside header component of the static route group.
export default function HeaderUIContainer({ children, id = '' }: Props) {
  return (
    <header
      id={id}
      className="min-h-fit w-full scroll-m-48 space-y-2 px-4 pt-[120px] pb-[40px] md:h-screen md:space-y-14 md:px-8 md:pt-[160px] lg:space-y-8 xl:space-y-12 xl:pt-[200px] 2xl:mx-auto 2xl:max-w-[1440px]"
    >
      {children}
    </header>
  );
}
