// Vercel Serverless Function for latest.json API proxy
module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Content-Type', 'application/json')

  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  try {
    const axios = require('axios')
    const apiUrl = 'https://rancangrinakit.online/kingkin/api/data/latest.json'
    
    const response = await axios.get(apiUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0'
      },
      timeout: 30000
    })
    
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch data'
    })
  }
}

