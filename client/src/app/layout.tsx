// Lib Imports.
import { Nunito } from 'next/font/google';

// Assets.
import './globals.css';

// Types.
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

// Font Initializations.
const FontNunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
});

// Root Metadata.
export const metadata: Metadata = {
  title: {
    template: '%s | Manga Trench',
    default: 'Manga Trench',
  },
};

// This Layout encapsulates the entire application.
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${FontNunito.variable} flex min-h-dvh flex-col justify-between gap-8 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
