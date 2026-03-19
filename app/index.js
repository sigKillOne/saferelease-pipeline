const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'SafeRelease Pipeline is running!',
    version: process.env.APP_VERSION || 'v1',
    timestamp: new Date().toISOString()
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime()
  });
});

app.listen(PORT, () => {
  console.log(`SafeRelease app running on port ${PORT}`);
});
