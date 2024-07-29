import { Box, Text } from "@0xsequence/design-system";
import { Chain } from "viem";

const NativeBalance = (props: { chain: Chain }) => {
  const { chain } = props;
  return (
    <Box display="flex">
      <Text variant="large" fontWeight="bold" color="text100">
        {chain.nativeCurrency.name} balance: (Coming Soon)
      </Text>
    </Box>
  );
};

export default NativeBalance;
