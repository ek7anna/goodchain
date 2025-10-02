require('dotenv').config();
const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const { triggerBitcoinTipMock } = require('./bitcoinHelper');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

/**
 * POST /claim
 * body: { userAddress, deedText, deedType(optional) }
 * returns: { status, tx, nftId, deedHash }
 */
app.post('/claim', async (req, res) => {
  try {
    const { userAddress, deedText = '', deedType = 'general' } = req.body || {};
    if (!userAddress) return res.status(400).json({ error: 'userAddress required' });

    // privacy-preserving deed hash
    const deedHash = crypto.createHash('sha256').update(`${userAddress}|${deedType}|${deedText}`).digest('hex');

    // Mocked response for Day-0
    const mockTx = triggerBitcoinTipMock(userAddress, 1000);
    const mockNftId = `MOCK_NFT_${Math.floor(Math.random() * 100000)}`;

    return res.json({
      status: 'ok',
      tx: mockTx,
      nftId: mockNftId,
      deedHash
    });
  } catch (err) {
    console.error('claim error', err);
    return res.status(500).json({ error: 'internal' });
  }
});

app.get('/', (req, res) => res.send('GoodChain backend running'));

app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));