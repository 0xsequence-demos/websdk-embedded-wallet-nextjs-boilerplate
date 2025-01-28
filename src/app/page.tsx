"use client";

import { SequenceBoilerplate } from "boilerplate-design-system";
import { useAccount, useDisconnect, useSwitchChain } from "wagmi";

import { Connected } from "./views/Connected";
import { NotConnected } from "./views/NotConnected";

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
      {isConnected ? <Connected /> : <NotConnected />}
    </SequenceBoilerplate>
  );
};

export default Home;
