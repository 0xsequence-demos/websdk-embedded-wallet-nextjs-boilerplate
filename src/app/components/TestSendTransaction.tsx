import { useEffect, useState } from "react";
import CardButton from "./CardButton/CardButton";
import { useSendTransaction, useWalletClient } from "wagmi";
import React from "react";
import { Box, Text } from "@0xsequence/design-system";

const TestSendTransaction = () => {
  const { data: walletClient } = useWalletClient();

  const {
    data: txnData,
    sendTransaction,
    isPending: isPendingSendTxn,
    error,
  } = useSendTransaction();
  const [lastTransaction, setLastTransaction] = useState<string | null>(null);

  useEffect(() => {
    if (txnData) {
      setLastTransaction(txnData);
    }
    if (error) console.error(error);
  }, [txnData, error]);

  const runSendTransaction = async () => {
    const [account] = await walletClient!.getAddresses();
    sendTransaction({ to: account, value: BigInt(0), gas: null });
  };

  return (
    <>
      <CardButton
        title="Send transaction"
        description="Send a transaction with your wallet"
        isPending={isPendingSendTxn}
        onClick={runSendTransaction}
      />
      {lastTransaction && (
        <Box>
          <Text>Last transaction hash: {lastTransaction}</Text>
        </Box>
      )}
    </>
  );
};

export default TestSendTransaction;
