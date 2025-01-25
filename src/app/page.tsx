"use client";

import { SequenceBoilerplate } from "boilerplate-design-system";
import { useAccount, useDisconnect, useSwitchChain } from "wagmi";

import Connector from "./components/Connector";
import MainConnected from "./components/MainConnected";

const Home = () => {
  const { isConnected } = useAccount();

  return (
    <SequenceBoilerplate
      githubUrl="https://github.com/0xsequence-demos/kit-embedded-wallet-nextjs-boilerplate"
      name="Sequence Kit Starter - Nextjs"
      description="Embedded Wallet"
      docsUrl="https://docs.sequence.xyz/solutions/wallets/sequence-kit/overview/"
      wagmi={{ useAccount, useDisconnect, useSwitchChain }}
    >
      {isConnected ? <MainConnected /> : <Connector />}
    </SequenceBoilerplate>
  );
};

export default Home;
