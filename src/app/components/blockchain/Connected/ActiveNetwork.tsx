import { Box, NetworkImage, Text } from "@0xsequence/design-system";
import { Chain } from "viem";

const ActiveNetwork = (props: { chain: Chain }) => {
  return (
    <Box display="flex" gap="2" justifyContent="center">
      <Box display="flex" gap="3">
        <Text variant="large" fontWeight="bold" color="text100">
          Network:{" "}
        </Text>
        <Box display="flex" gap="1" justifyContent="center">
          <NetworkImage chainId={props.chain.id} />
          <Text variant="large" fontWeight="bold" color="text100">
            {" "}
            {props.chain.name}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default ActiveNetwork;
