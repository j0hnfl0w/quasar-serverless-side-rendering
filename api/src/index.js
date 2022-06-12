const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ all: 'good' });
});

module.exports = app;
