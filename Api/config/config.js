require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  host: process.env.HOST || '127.9.63.7',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || 'root',
  dbPassword: process.env.DB_PASSWORD || 'root',
  dbHost: process.env.DB_HOST || 'interestelar.ah7byfz.mongodb.net',
  dbName: process.env.DB_NAME || 'interestelar',
  dbPort: process.env.DB_PORT || 5162,
};

module.exports = { config };
