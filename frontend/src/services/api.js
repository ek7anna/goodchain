import axios from "axios";

// Submit a deed to backend /claim endpoint
export const submitClaim = ({ wallet, deed }) => {
  return axios.post("http://localhost:4000/claim", {
    userAddress: wallet,   // must match Joanne’s backend
    deedText: deed         // must match Joanne’s backend
  });
};
