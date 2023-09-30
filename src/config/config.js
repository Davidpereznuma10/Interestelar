require('dotenv').config();

const config={
 env: process.env.NODE_ENV || "dev",
 host: process.env.HOST || "127.9.63.7",
 port: process.env.PORT || 3000,
 dbHost: process.env.DB_HOST || "127.9.63.7",
 dbName: process.env.DB_NAME || "Interestelar",
 dbPort: process.env.DB_PORT ||5162
};

module.exports = { config }