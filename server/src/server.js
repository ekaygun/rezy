require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Configure CORS
app.use(cors({
  origin: ['https://perfect-courtesy-production.up.railway.app', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true
}));

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
    console.log('Search request:', { query, filters }); // Add logging
    
    // Mock response for now
    res.json({
      itemSummaries: [
        {
          itemId: '1',
          title: 'Nike Air Max',
          price: { value: 99.99 },
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
