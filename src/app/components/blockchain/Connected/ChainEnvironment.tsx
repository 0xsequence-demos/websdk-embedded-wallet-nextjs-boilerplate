import { Box, Text } from "@0xsequence/design-system";
import { Chain } from "viem";

const ChainEnvironment = (props: { chain: Chain }) => {
  const { chain } = props;
  return (
    <Box display="flex" gap="2" justifyContent="center">
      <Box>
        <Box display="flex" justifyContent="space-between">
          <Text variant="large" fontWeight="bold" color="text100">
            Tesnet: {chain.testnet?.toString()}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ChainEnvironment;
