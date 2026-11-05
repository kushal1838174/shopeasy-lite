const app = require('./app');
const express = require('express');
const server = express();

server.get('/', (req, res) => {
  res.send('<h1>ShopEasy Lite Version 2.0 - Defective Release!</h1>');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});