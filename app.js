const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Welcome to ShopEasy Lite!');
});

module.exports = app;