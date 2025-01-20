import { createConfig } from "@0xsequence/kit";

// Get your own keys on sequence.build
export const projectAccessKey = process.env.NEXT_PUBLIC_PROJECT_ACCESS_KEY!;
const waasConfigKey = process.env.NEXT_PUBLIC_WAAS_CONFIG_KEY!;
const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
const appleClientId = process.env.NEXT_PUBLIC_APPLE_CLIENT_ID;
const appleRedirectURI =
  typeof window !== "undefined" ? `https://${window.location.host}` : "";
const walletConnectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_ID;

export const config: any = createConfig("waas", {
  projectAccessKey: projectAccessKey,
  chainIds: [1, 421614], // 13473 Not supported by sequence error
  defaultChainId: 421614,
  appName: "Kit Starter",
  waasConfigKey: waasConfigKey,
  googleClientId: googleClientId,
  appleClientId: appleClientId,
  appleRedirectURI: appleRedirectURI,
  walletConnectProjectId: walletConnectId,
});
