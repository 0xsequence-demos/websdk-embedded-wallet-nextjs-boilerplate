import { Box } from "@0xsequence/design-system";
import ActiveNetwork from "./ActiveNetwork";
import ChainEnvironment from "./ChainEnvironment";
import NativeBalance from "./NativeBalance";
import { Chain } from "viem";

const ChainInfo = (props: { chain: Chain }) => {
  return (
    <Box marginBottom="8">
      <Box display="flex" justifyContent="space-between">
        <ActiveNetwork chain={props.chain} />
        <ChainEnvironment chain={props.chain} />
      </Box>
      <NativeBalance chain={props.chain} />
    </Box>
  );
};

export default ChainInfo;
