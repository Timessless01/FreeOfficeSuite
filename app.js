const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/document', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/document.html'));
});

app.get('/spreadsheet', (req, res) => {
  res.send('Spreadsheet Editor (EtherCalc) Coming Soon!');
});

app.get('/presentation', (req, res) => {
  res.send('Presentation Editor (Reveal.js) Coming Soon!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});