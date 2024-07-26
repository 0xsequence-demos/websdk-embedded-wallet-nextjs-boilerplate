import { Box, Text } from "@0xsequence/design-system";
import { useAccount } from "wagmi";

const NativeBalance = () => {
  const { chain, address } = useAccount();

  return (
    <Box display="flex">
      {chain && address ? (
        <Text variant="large" fontWeight="bold" color="text100">
          {chain.nativeCurrency.name} balance: (Coming Soon)
        </Text>
      ) : (
        <Text variant="large" fontWeight="bold" color="text100">
          User not connected
        </Text>
      )}
    </Box>
  );
};

export default NativeBalance;
