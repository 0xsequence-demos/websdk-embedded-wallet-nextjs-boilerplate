"use client";
import { useAccount } from "wagmi";
import { Text } from "@0xsequence/design-system";
import Connected from "./components/blockchain/Connected";
import NotConnected from "./components/blockchain/NotConnected";

const HomePage = () => {
  const { isConnected, chain } = useAccount();
  return (
    <div>
      <h1>Sequence Kit Starter - Nextjs</h1>
      <h2 className="homepage__marginBtNormal">Embedded Wallet</h2>
      {isConnected ? <Connected /> : <NotConnected />}
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
