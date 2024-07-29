import { Box } from "@0xsequence/design-system";
import ActiveNetwork from "./ActiveNetwork";
import ChainEnvironment from "./ChainEnvironment";
import NativeBalance from "./NativeBalance";
import { Chain } from "viem";

const ChainInfo = (props: { chain: Chain }) => {
  const chain = props.chain;
  return (
    <Box marginBottom="8">
      <Box display="flex" justifyContent="space-between">
        <ActiveNetwork chain={chain} />
        <ChainEnvironment chain={chain} />
      </Box>
      <NativeBalance chain={chain} />
    </Box>
  );
};

export default ChainInfo;
