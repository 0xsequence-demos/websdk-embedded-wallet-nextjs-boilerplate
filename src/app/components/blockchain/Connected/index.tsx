import { Box, Text } from "@0xsequence/design-system";
import { useAccount, useDisconnect } from "wagmi";
import ActiveNetwork from "./ActiveNetwork";
import ChainEnvironment from "./ChainEnvironment";
import NativeBalance from "./NativeBalance";
import TestSendTransaction from "./TestSendTransaction";

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
      {chain && (
        <Box marginBottom="8">
          <Box display="flex" justifyContent="space-between">
            <ActiveNetwork />
            <ChainEnvironment />
          </Box>
          <NativeBalance />
        </Box>
      )}
      <TestSendTransaction />
    </>
  );
};

export default Connected;
