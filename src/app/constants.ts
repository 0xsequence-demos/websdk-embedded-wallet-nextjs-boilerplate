import {
  arbitrumSepolia,
  Chain,
  mainnet,
  polygon,
  polygonAmoy,
} from "wagmi/chains";

const chains = [mainnet, polygon, polygonAmoy, arbitrumSepolia] as [
  Chain,
  ...Chain[],
];

export default chains;
