import express from 'express';
import dotenv from 'dotenv';
import { config } from './config/config.js';
import { URI } from './libs/mongoDB/data/conexion.js';
// import { getCourseData } from './libs/mongoDB/data/import/processApi.js';

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

// getCourseData()