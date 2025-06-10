import { createConfig } from "@0xsequence/connect";
import {
  chainIdFromString,
  chainIdsFromString,
} from "./app/utils/chainIdUtils";

// Get your own keys on sequence.build
export const projectAccessKey = process.env.NEXT_PUBLIC_PROJECT_ACCESS_KEY!;
const waasConfigKey = process.env.NEXT_PUBLIC_WAAS_CONFIG_KEY!;
const epicAuthUrl = process.env.NEXT_PUBLIC_EPIC_AUTH_URL!;
const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const appleClientId = process.env.NEXT_PUBLIC_APPLE_CLIENT_ID;
const appleRedirectURI =
  typeof window !== "undefined" ? `https://${window.location.host}` : "";
const walletConnectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID;
const appName =
  process.env.NEXT_PUBLIC_APP_NAME || "Web SDK Embedded Wallet (NextJs)";
const chainIds = chainIdsFromString(process.env.NEXT_PUBLIC_CHAINS!);
const defaultChainId = chainIdFromString(
  process.env.NEXT_PUBLIC_DEFAULT_CHAIN!,
);

if (defaultChainId && !chainIds.includes(defaultChainId)) {
  console.warn(
    `Your preferred default chain ${defaultChainId} is not on your list of supported chains (${process.env.NEXT_PUBLIC_DEFAULT_CHAIN})`,
  );
}

export const config: any = createConfig("waas", {
  appName,
  projectAccessKey,
  chainIds,
  defaultChainId,
  waasConfigKey: waasConfigKey,
  google: { clientId: googleClientId as string },
  apple: {
    clientId: appleClientId as string,
    redirectURI: appleRedirectURI as string,
  },
  walletConnect: {
    projectId: walletConnectId as string,
  },
  epic: {
    authUrl: epicAuthUrl,
  }
});
