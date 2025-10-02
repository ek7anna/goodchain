 import React, { useState } from "react";
import WalletConnect from "./components/WalletConnect";
import ClaimForm from "./components/ClaimForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [wallet, setWallet] = useState("");

  return (
    <div>
      <h1>GoodChain</h1>
      {!wallet ? (
        <WalletConnect onConnect={setWallet} />
      ) : (
        <>
          <ClaimForm wallet={wallet} />
          <Dashboard wallet={wallet} />
        </>
      )}
    </div>
  );
}

export default App;

