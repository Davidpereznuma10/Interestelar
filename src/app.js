const express = require('express');
const dotenv = require('dotenv');
const { config } = require('./config/config');
const { URI } = require('./libs/mongoDB/data/conexion');
const { getCourseData } = require('./libs/mongoDB/data/import/processApi');

dotenv.config();
const app = express();

const PORT = config.port;
const hostname = config.host;

app.use(express.json());

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello world');
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server on: http://${hostname}:5161`);
  console.log(`Mongo link: ${URI}`);
});

getCourseData()