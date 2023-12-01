const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();

const pemFilePath = '../pki-example-1/certs/simple.org.pem';

const pemContent = fs.readFileSync(pemFilePath, 'utf8');

const server = https.createServer({ key: pemContent , cert: pemContent  }, app);

app.get('/', (req, res) => {
  res.send('Hello, CMPE272!');
});

server.listen(443, () => {
  console.log(`Server running on https://localhost:443`);
});