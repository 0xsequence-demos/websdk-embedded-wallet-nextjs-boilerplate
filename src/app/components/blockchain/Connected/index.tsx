import { Text } from "@0xsequence/design-system";
import { useAccount } from "wagmi";
import Disconnect from "./Disconnect";
import Tests from "./Tests";
import ChainInfo from "./ChainInfo";

const Connected = () => {
  const { address, chain } = useAccount();
  return (
    <>
      <Text variant="large" fontWeight="bold" color="text100">
        Connected with address: {address}
      </Text>
      <Disconnect />
      {chain && <ChainInfo chain={chain} />}
      <Tests />
    </>
  );
};

export default Connected;
