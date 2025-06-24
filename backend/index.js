const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 8080;

app.use(cors());

app.get('/search', async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ error: 'Query required' });

  try {
    const response = await axios.get('https://en.wikipedia.org/w/api.php', {
      params: {
        action: 'query',
        list: 'search',
        srsearch: q,
        format: 'json',
        origin: '*'
      }
    });

    const results = response.data.query.search;
    res.json(results);
  } 
  catch (error) {
    res.status(500).json({ error: 'Wikipedia fetch failed' });
  }
});

app.listen(PORT, () => {
  console.log("server is listening to port 8080");
});
