require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// eBay OAuth token management
let accessToken = null;
let tokenExpiration = null;

async function getAccessToken() {
  if (accessToken && tokenExpiration > Date.now()) {
    return accessToken;
  }

  try {
    const response = await axios.post('https://api.ebay.com/identity/v1/oauth2/token', 
      'grant_type=client_credentials&scope=https://api.ebay.com/oauth/api_scope',
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${Buffer.from(`${process.env.EBAY_CLIENT_ID}:${process.env.EBAY_CLIENT_SECRET}`).toString('base64')}`
        }
      }
    );

    accessToken = response.data.access_token;
    tokenExpiration = Date.now() + (response.data.expires_in * 1000);
    return accessToken;
  } catch (error) {
    console.error('Error getting eBay access token:', error);
    throw error;
  }
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

// Search endpoint
app.post('/api/search', async (req, res) => {
  try {
    const { query, filters } = req.body;
    const token = await getAccessToken();
    
    // Build eBay API query parameters
    const queryParams = new URLSearchParams({
      q: query,
      limit: 50
    });

    // Add filters if they exist
    if (filters) {
      const ebayFilters = buildEbayFilters(filters);
      if (ebayFilters.length > 0) {
        queryParams.append('filter', ebayFilters.join(','));
      }
    }

    const response = await axios.get(
      `https://api.ebay.com/buy/browse/v1/item_summary/search?${queryParams}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'X-EBAY-C-MARKETPLACE-ID': 'EBAY_US'
        }
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Search error:', error);
    res.status(500).json({ 
      error: 'Search failed', 
      details: error.response?.data || error.message 
    });
  }
});

function buildEbayFilters(filters) {
  const ebayFilters = [];
  
  if (filters.brand) {
    ebayFilters.push(`brand:${filters.brand}`);
  }
  if (filters.size) {
    ebayFilters.push(`size:${filters.size}`);
  }
  if (filters.gender) {
    ebayFilters.push(`gender:${filters.gender}`);
  }
  if (filters.color) {
    ebayFilters.push(`color:${filters.color}`);
  }
  
  return ebayFilters;
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
