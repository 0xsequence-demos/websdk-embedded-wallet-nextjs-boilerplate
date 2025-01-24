"use client";
import { SequenceKit } from "@0xsequence/kit";
import "./globals.css";
import "@0xsequence/design-system/styles.css";

import { useEffect, useState } from "react";
import FullScreenLoading from "./components/FullScreenLoading";
import { config } from "../config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        {!isClient ? (
          <FullScreenLoading />
        ) : (
          <SequenceKit config={config}>
            <div id="root">{children}</div>
          </SequenceKit>
        )}
      </body>
    </html>
  );
}
