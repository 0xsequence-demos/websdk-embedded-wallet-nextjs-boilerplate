"use client";
import { SequenceConnect } from "@0xsequence/connect";
import { SequenceWalletProvider } from "@0xsequence/wallet-widget";
import { useEffect, useState } from "react";
import { Loading } from "@/app/views/Loading";
import { config } from "../config";
import { ThemeProvider } from "@0xsequence/design-system";
export function Contexts({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Optional: skeleton or fallback
    return null;
  }

  if (!hydrated) {
    return <Loading />;
  }

  return (
    <ThemeProvider>
      <SequenceConnect config={config}>
        <SequenceWalletProvider>{children}</SequenceWalletProvider>
      </SequenceConnect>
    </ThemeProvider>
  );
}
