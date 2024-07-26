"use client";
import { useAccount, useWalletClient, useSendTransaction } from "wagmi";
import CardButton from "./components/CardButton";
import { useEffect, useState } from "react";
import { Box, Text } from "@0xsequence/design-system";
import ActiveNetwork from "./components/blockchain/ActiveNetwork";
import ChainEnvironment from "./components/blockchain/ChainEnvironment";
import NativeBalance from "./components/blockchain/NativeBalance";
import Connected from "./components/blockchain/Connected";
import NotConnected from "./components/blockchain/Disconnected";

const HomePage = () => {
  const { isConnected, chain } = useAccount();
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

  const DefaultConnectedUI = () => (
    <>
      <Connected />
      {chain && (
        <Box marginBottom="8">
          <Box display="flex" justifyContent="space-between">
            <ActiveNetwork />
            <ChainEnvironment />
          </Box>
          <NativeBalance />
        </Box>
      )}
    </>
  );

  const runSendTransaction = async () => {
    if (!isConnected) {
      return;
    }

    const [account] = await walletClient!.getAddresses();

    sendTransaction({ to: account, value: BigInt(0), gas: null });
  };

  return (
    <div>
      <h1>Sequence Kit Starter - Nextjs</h1>
      <h2 className="homepage__marginBtNormal">Embedded Wallet</h2>
      {isConnected ? <DefaultConnectedUI /> : <NotConnected />}
      {isConnected && (
        <CardButton
          title="Send transaction"
          description="Send a transaction with your wallet"
          isPending={isPendingSendTxn}
          onClick={runSendTransaction}
        />
      )}
      {lastTransaction && (
        <Box>
          <Text>Last transaction hash: {lastTransaction}</Text>
        </Box>
      )}
      <footer className="homepage__footer">
        <Text>
          Want to learn more? Read the{" "}
          <a
            href={
              "https://docs.sequence.xyz/solutions/wallets/sequence-kit/overview/"
            }
            target="_blank"
            rel="noreferrer "
          >
            docs
          </a>
          !
        </Text>
      </footer>
    </div>
  );
};

export default HomePage;
