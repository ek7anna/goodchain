import React, { useState } from "react";
import { submitClaim } from "../services/api";

const ClaimForm = ({ wallet }) => {
  const [deed, setDeed] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!wallet) return setMessage("Wallet not connected!");
    
    console.log("Submitting to backend:", { wallet, deed });

    try {
      const { data } = await submitClaim({ wallet, deed });
      console.log("Backend response:", data);

      if (data.status === "ok") {
        setMessage(
          `✅ Claim submitted!\nNFT ID: ${data.nftId}\nBTC Tx: ${data.tx}`
        );
      } else {
        setMessage("⚠️ Claim failed. Please try again.");
      }

      setDeed(""); // clear input
    } catch (error) {
      console.error("Submit claim error:", error);

      if (error.response && error.response.data && error.response.data.error) {
        setMessage(`❌ Error: ${error.response.data.error}`);
      } else {
        setMessage("❌ Error submitting claim");
      }
    }
  };

  return (
    <div>
      <h2>Submit Deed</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your deed"
          value={deed}
          onChange={(e) => setDeed(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {message && (
        <pre style={{ background: "#f4f4f4", padding: "8px" }}>{message}</pre>
      )}
    </div>
  );
};

export default ClaimForm;
