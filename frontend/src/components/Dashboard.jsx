 import React from "react";

const Dashboard = ({ wallet }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Wallet: {wallet}</p>
      <p>✅ GoodChain Badge earned!</p>
    </div>
  );
};

export default Dashboard;

