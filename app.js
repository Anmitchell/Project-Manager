const express = require('express');

// Create express application
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;
