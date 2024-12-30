require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Rezy API is running' });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Search endpoint
app.post('/api/search', async (req, res) => {
  try {
    const { query, filters } = req.body;
    
    // Mock response for now until eBay API is integrated
    res.json({
      itemSummaries: [
        {
          itemId: '1',
          title: 'Test Item',
          price: { value: 19.99 },
          condition: 'New',
          image: { imageUrl: '/api/placeholder/200/200' }
        }
      ]
    });
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ error: 'Search failed' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
