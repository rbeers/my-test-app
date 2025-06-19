const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from the Express API!',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Express server running on http://localhost:${PORT}`);
  console.log(`📡 API endpoints available:`);
  console.log(`   - GET http://localhost:${PORT}/api/hello`);
  console.log(`   - GET http://localhost:${PORT}/api/health`);
}); 