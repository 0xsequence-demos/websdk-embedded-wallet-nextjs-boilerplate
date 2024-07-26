import { Box, NetworkImage, Text } from "@0xsequence/design-system";
import { useAccount, useDisconnect } from "wagmi";

const Connected = () => {
  const { address } = useAccount();
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
    </>
  );
};

export default Connected;
