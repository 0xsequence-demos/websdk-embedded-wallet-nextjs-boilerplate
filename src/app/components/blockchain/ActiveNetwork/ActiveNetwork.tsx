import { Box, NetworkImage, Text } from "@0xsequence/design-system";
import { useAccount } from "wagmi";

const ActiveNetwork = () => {
  const { chain } = useAccount();

  return (
    <Box display="flex" gap="2" justifyContent="center">
      {chain ? (
        <Box display="flex" gap="3">
          <Text variant="large" fontWeight="bold" color="text100">
            Network:{" "}
          </Text>
          <Box display="flex" gap="1" justifyContent="center">
            <NetworkImage chainId={chain.id} />
            <Text variant="large" fontWeight="bold" color="text100">
              {" "}
              {chain.name}
            </Text>
          </Box>
        </Box>
      ) : (
        <Text variant="large" fontWeight="bold" color="text100">
          User not connected
        </Text>
      )}
    </Box>
  );
};

export default ActiveNetwork;
