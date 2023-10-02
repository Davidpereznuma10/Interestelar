# Application Configuration

The `config.js` file contains the core configuration for the application. This configuration is used to set environment variables and configuration options that affect the application's behavior.

## Environment Variables

The application relies on environment variables to configure its runtime environment. These variables can be set in a `.env` file in the root directory of the application or elsewhere as needed.

- `NODE_ENV`: Defines the application's execution environment. Common values include 'dev,' 'production,' or 'test.'

- `HOST`: Specifies the IP address or host on which the application will run.

- `PORT`: Defines the port on which the application will listen for HTTP requests.

- `DB_USER`: Specifies the username for the database.

- `DB_PASSWORD`: Sets the password for accessing the database.

- `DB_HOST`: Defines the address of the database server.

- `DB_NAME`: Specifies the name of the database to which the application will connect.

- `DB_PORT`: Defines the database port.

## Configuration Example

```javascript
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
