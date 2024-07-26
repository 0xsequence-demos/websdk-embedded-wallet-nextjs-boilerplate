"use client";
import { useOpenConnectModal } from "@0xsequence/kit";
import {
  useDisconnect,
  useAccount,
  useWalletClient,
  useSendTransaction,
} from "wagmi";
import { CardButton } from "./components/CardButton";
import { useEffect, useState } from "react";
import { Box, Text, NetworkImage } from "@0xsequence/design-system";

const HomePage = () => {
  const { setOpenConnectModal } = useOpenConnectModal();
  const { isConnected, address, chain } = useAccount();
  const { disconnect } = useDisconnect();
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

  const onClickConnect = () => {
    setOpenConnectModal(true);
  };

  const onClickDisconnect = () => {
    disconnect();
  };

  const Connected = () => (
    <>
      <Text variant="large" fontWeight="bold" color="text100">
        Connected with address: {address}
      </Text>
      {chain && (
        <Box>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" gap="2" justifyContent="center">
              <Text variant="large" fontWeight="bold" color="text100">
                Network:{" "}
              </Text>
              <Box display="flex" gap="1" justifyContent="center">
                <NetworkImage chainId={chain.id} />
                <Text variant="large" fontWeight="bold" color="text100">
                  {" "}
                  {chain.name}
                </Text>
              </Box>
            </Box>
            <Text variant="large" fontWeight="bold" color="text100">
              Tesnet: {chain.testnet?.toString()}
            </Text>
          </Box>
          <Box display="flex">
            <Text variant="large" fontWeight="bold" color="text100">
              {chain.nativeCurrency.name} balance: (Coming Soon)
            </Text>
          </Box>
        </Box>
      )}
      <div className="card">
        <button onClick={onClickDisconnect}>Disconnect</button>
      </div>
    </>
  );

  const Disconnected = () => (
    <>
      <p>Not connected</p>
      <div className="card">
        <button onClick={onClickConnect}>Connect</button>
      </div>
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
      {isConnected ? <Connected /> : <Disconnected />}
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
