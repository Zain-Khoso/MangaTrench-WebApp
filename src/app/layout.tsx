// Lib Imports.
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Local Imports.
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Manga Trench",
  description:
    "This is where you can find & read all the manga you want for free.",
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
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}>
        {children}
      </body>
    </html>
  );
}
