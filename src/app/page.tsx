"use client";

import { useAccount } from "wagmi";

import Connector from "./components/Connector";
import MainConnected from "./components/MainConnected";
import { SequenceBoilerplate } from "boilerplate-design-system";

const Home = () => {
  const { isConnected } = useAccount();

  return (
    <SequenceBoilerplate
      githubUrl="https://github.com/0xsequence-demos/kit-embedded-wallet-nextjs-boilerplate"
      name="Sequence Kit Starter - Nextjs"
      description="Embedded Wallet"
      docsUrl="https://docs.sequence.xyz/solutions/wallets/sequence-kit/overview/"
    >
      {isConnected ? <MainConnected /> : <Connector />}
    </SequenceBoilerplate>
  );
};

export default Home;
