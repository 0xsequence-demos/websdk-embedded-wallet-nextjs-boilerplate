import {
  arbitrumSepolia,
  Chain,
  immutableZkEvmTestnet,
  mainnet,
  polygon,
  polygonAmoy,
} from "wagmi/chains";

const chains = [
  mainnet,
  polygon,
  polygonAmoy,
  arbitrumSepolia,
  immutableZkEvmTestnet,
] as [Chain, ...Chain[]];

export default chains;
