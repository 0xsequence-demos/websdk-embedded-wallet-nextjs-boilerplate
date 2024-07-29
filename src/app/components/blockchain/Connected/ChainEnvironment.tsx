import { Box, Text } from "@0xsequence/design-system";
import { useAccount } from "wagmi";

const ChainEnvironment = () => {
  const { chain } = useAccount();

  return (
    <Box display="flex" gap="2" justifyContent="center">
      {chain ? (
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Text variant="large" fontWeight="bold" color="text100">
              Tesnet: {chain.testnet?.toString()}
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

export default ChainEnvironment;
