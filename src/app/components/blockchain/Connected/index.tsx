import { Text } from "@0xsequence/design-system";
import { useAccount, useDisconnect } from "wagmi";
import TestSendTransaction from "./TestSendTransaction";
import ChainInfo from "./ChainInfo";

const Connected = () => {
  const { address, chain } = useAccount();
  const { disconnect } = useDisconnect();
  const onClickDisconnect = () => {
    disconnect();
  };
  return (
    <>
      <Text variant="large" fontWeight="bold" color="text100">
        Connected with address: {address}
      </Text>
      <div className="card">
        <button onClick={onClickDisconnect}>Disconnect</button>
      </div>
      {chain && address && <ChainInfo chain={chain} />}
      <TestSendTransaction />
    </>
  );
};

export default Connected;
