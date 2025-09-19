 const { createLogger, format, transports } = require('winston');
const path = require('path');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.File({ filename: path.join(__dirname, 'logs', 'app.log'), level: 'info' }),
    new transports.Console({ level: 'debug' })
  ]
});

module.exports = logger;
