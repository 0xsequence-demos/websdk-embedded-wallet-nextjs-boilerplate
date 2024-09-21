"use client";
import { getDefaultWaasConnectors, KitProvider } from "@0xsequence/kit";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useEffect, useState } from "react";
import { createConfig, http, WagmiProvider } from "wagmi";
import {
  arbitrumSepolia,
  Chain,
  mainnet,
  polygon,
  polygonAmoy,
} from "wagmi/chains";
import FullScreenLoading from "./components/FullScreenLoading";
import "@0xsequence/design-system/styles.css";

const queryClient = new QueryClient();

export const chains = [mainnet, polygon, polygonAmoy, arbitrumSepolia] as [
  Chain,
  ...Chain[],
];

const Providers = (props: { children: ReactNode }) => {
  const { children } = props;
  const [isClient, setIsClient] = useState(false);

  // Get your own keys on sequence.build
  const projectAccessKey = process.env.NEXT_PUBLIC_PROJECT_ACCESS_KEY;
  const waasConfigKey = process.env.NEXT_PUBLIC_WAAS_CONFIG_KEY;
  const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  // const appleClientId = process.env.NEXT_PUBLIC_APPLE_CLIENT_ID
  // const appleRedirectURI = window.location.origin + window.location.pathname //this approach doesn't work with nextjs
  const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID;

  if (!projectAccessKey) {
    throw new Error("projectAccessKey is not defined");
  }

  if (!waasConfigKey) {
    throw new Error("waasConfigKey is not defined");
  }

  if (!googleClientId) {
    throw new Error("googleClientId is not defined");
  }

  // if (!appleClientId) {
  //   throw new Error('appleClientId is not defined');
  // }

  // if (!appleRedirectURI) {
  //   throw new Error('appleRedirectURI is not defined');
  // }

  if (!walletConnectProjectId) {
    throw new Error("walletConnectProjectId is not defined");
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <FullScreenLoading />;

  const connectors = getDefaultWaasConnectors({
    walletConnectProjectId,
    waasConfigKey,
    googleClientId,
    // Notice: AppleID will only work if deployed on https to support Apple redirects
    // appleClientId,
    // appleRedirectURI,
    /* Arbitrum sepolia chainId */
    defaultChainId: 421614,
    appName: "Kit Starter",
    projectAccessKey,
  });

  const transports: { [key: number]: any } = {};

  chains.forEach((chain) => {
    transports[chain.id] = http();
  });

  const config = createConfig({
    transports,
    connectors,
    chains,
  });

  const kitConfig = {
    projectAccessKey,
  };

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <KitProvider config={kitConfig}>{children}</KitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Providers;
