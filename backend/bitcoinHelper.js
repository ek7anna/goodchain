// bitcoinHelper.js
// Mock helper: replace with Atomiq/Xverse SDK usage on Day 2

function triggerBitcoinTipMock(recipientAddress, amountSats = 1000) {
  return `MOCK_BTC_TX_${Date.now()}`;
}

module.exports = { triggerBitcoinTipMock }; 