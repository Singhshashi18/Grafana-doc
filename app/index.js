      const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const logger = require('./logger');

const app = express();
app.use(express.json());

// HTTP access logs also append to app.log (optional)
// app.use(morgan('combined', {
//   stream: fs.createWriteStream('./logs/app.log', { flags: 'a' })
// }));
app.use(morgan('combined'));

app.get('/', (req, res) => {
  logger.info('Home route visited', { route: '/', method: 'GET' });
  res.send('Hello — logs are being written!');
});

app.get('/error', (req, res) => {
  logger.error('Error route triggered', { route: '/error' });
  res.status(500).send('Generated an error log');
});

app.listen(3001, () => {
  logger.info('Server started', { port: 3001 });
  console.log('Server running on http://localhost:3001');
});
