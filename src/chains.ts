import {
  arbitrumSepolia,
  Chain,
  mainnet,
  polygon,
  polygonAmoy,
} from "wagmi/chains";

export const chains = [mainnet, polygon, polygonAmoy, arbitrumSepolia] as [
  Chain,
  ...Chain[],
];
