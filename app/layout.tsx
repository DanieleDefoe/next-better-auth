import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { Roboto } from "next/font/google";

import "./globals.css";
import ThemeProvider from "./_providers/ThemeProvider";

const roboto = Roboto({
  subsets: ["latin", "cyrillic-ext"],
});

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Next.js App",
};

export default function RootLayout({
  children,
}: Readonly<Required<PropsWithChildren>>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
