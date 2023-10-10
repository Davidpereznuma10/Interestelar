# Application Configuration

The `config.js` file contains the core configuration for the application. This configuration is used to set environment variables and configuration options that affect the application's behavior.

## Environment Variables

The application relies on environment variables to configure its runtime environment. These variables can be set in a `.env` file in the root directory of the application or elsewhere as needed.

- `NODE_ENV`: Defines the application's execution environment. It can take one of the following values: 'development,' 'production,' 'testing.'

- `HOST`: Specifies the IP address or host on which the application will run.

- `PORT`: Defines the port on which the application will listen for HTTP requests.

- `DB_USER`: Specifies the username for the database.

- `DB_PASSWORD`: Sets the password for accessing the database.

- `DB_HOST`: Defines the address of the database server.

- `DB_NAME`: Specifies the name of the database to which the application will connect.

- `DB_PORT`: Defines the database port.

- `SERVER_ID`: Specifies the server ID. (Default: '1159642630255288340')

- `SERVER_SECRET`: Sets the server secret. (Default: 'GRZ3XU6CyVAek6J_H5kcFsxceIa1en-P')

- `CAMPUS_ID`: Specifies the campus ID. (Default: '1101581994355347526')

### Example:

```javascript
const config = {
  env: process.env.NODE_ENV || 'development',
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || 'root',
  dbPassword: process.env.DB_PASSWORD || 'password',
  dbHost: process.env.DB_HOST || 'localhost',
  dbName: process.env.DB_NAME || 'mydb',
  dbPort: process.env.DB_PORT || 27017,
  serverId: process.env.SERVER_ID || '1159642630255288340',
  serverSecret: process.env.SERVER_SECRET || 'GRZ3XU6CyVAek6J_H5kcFsxceIa1en-P',
  campusId: process.env.CAMPUS_ID || '1101581994355347526',
};

module.exports = { config };
