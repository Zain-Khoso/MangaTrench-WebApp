// Lib Imports.
import { Nunito } from 'next/font/google';

// Local Imports.
import './globals.css';
import { Toast } from '@/components/ReactHotToast';

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
    default: 'Manga Trench',
    template: '%s | Manga Trench',
  },
  metadataBase: new URL('https://mangatrench.vercel.app'),
  description: 'Discover, rate, and review your favorite manga – all in one trench.',
  keywords: ['manga', 'manga reviews', 'read manga', 'manga discovery', 'manga list'],
  authors: [{ name: 'Zain Khoso', url: 'https://www.linkedin.com/in/zain-khoso/' }],
  creator: 'Zain Khoso',
  publisher: 'Zain Khoso',
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

// This Layout encapsulates the entire application.
export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${FontNunito.variable} flex min-h-dvh flex-col justify-between gap-8 antialiased`}
      >
        <Toast />
        {children}
      </body>
    </html>
  );
}
