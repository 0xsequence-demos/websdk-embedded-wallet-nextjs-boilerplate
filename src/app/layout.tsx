import "./globals.css";

import { Contexts } from "@/app/contexts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <title>Sequence Kit Starter - Nextjs</title>
      </head>
      <body>
        <Contexts>{children}</Contexts>
      </body>
    </html>
  );
}
