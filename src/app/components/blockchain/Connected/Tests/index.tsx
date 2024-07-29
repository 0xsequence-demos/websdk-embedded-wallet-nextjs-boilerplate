import { Box } from "@0xsequence/design-system";
import TestSendTransaction from "./TestSendTransaction";
import TestSignMessage from "./TestSignMessage";

const Tests = () => {
  return (
    <Box display="flex" flexDirection="column" gap="4">
      <TestSignMessage />
      <TestSendTransaction />
    </Box>
  );
};

export default Tests;
