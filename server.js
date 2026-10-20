const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Unlocked Plus API endpoints
app.get('/api/status', (req, res) => {
  res.json({
    status: 'online',
    version: '1.0.0-plus-unlocked',
    tier: 'ULTIMATE_PLUS',
    allFeaturesUnlocked: true,
    message: 'Welcome to your custom Melonly Plus instance! All restrictions have been removed.'
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Melonly Plus server running on port ${PORT}`);
});
