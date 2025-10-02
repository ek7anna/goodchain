 import React, { useState } from "react";

const WalletConnect = ({ onConnect }) => {
  const [address, setAddress] = useState("");

  const handleConnect = () => {
    if (address.trim()) {
      onConnect(address);
    }
  };

  return (
    <div>
      <h2>Wallet Connect</h2>
      <input
        type="text"
        placeholder="Enter wallet address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleConnect}>Connect</button>
    </div>
  );
};

export default WalletConnect;

