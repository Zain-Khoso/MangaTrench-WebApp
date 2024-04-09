// Lib Imports.
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Local Imports.
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
