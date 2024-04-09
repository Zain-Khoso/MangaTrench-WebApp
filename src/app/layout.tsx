// Lib Imports.
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';

// Local Imports.
import '@/app/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Manga Trench',
  description:
    'This is where you can find & read all the manga you want for free.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen dark font-sans antialiased',
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
