import type { PropsWithChildren } from "react";

export default function RootLayout({
  children,
}: Readonly<Required<PropsWithChildren>>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
