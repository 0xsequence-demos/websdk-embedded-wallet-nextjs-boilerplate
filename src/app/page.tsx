"use client";
import { useAccount } from "wagmi";

import Connector from "./components/Connector";
import { Footer } from "./components/Footer";
import MainConnected from "./components/MainConnected";

const HomePage = () => {
  const { isConnected } = useAccount();
  return (
    <div>
      <h1>Sequence Kit Starter - Nextjs</h1>
      <h2 className="homepage__marginBtNormal">Embedded Wallet</h2>
      {isConnected ? <MainConnected /> : <Connector />}
      <Footer />
    </div>
  );
};

export default HomePage;
