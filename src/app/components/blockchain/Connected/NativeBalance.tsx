import { Box, Text } from "@0xsequence/design-system";
import { Chain } from "viem";
import { useAccount } from "wagmi";

const NativeBalance = (props: { chain: Chain }) => {
  return (
    <Box display="flex">
      <Text variant="large" fontWeight="bold" color="text100">
        {props.chain.nativeCurrency.name} balance: (Coming Soon)
      </Text>
    </Box>
  );
};

export default NativeBalance;
