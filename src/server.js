const express = require('express');
const axios = require('axios');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Welcome to the API Aggregator!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
