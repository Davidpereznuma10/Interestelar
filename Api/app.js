import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';
import cors from 'cors';
import passport from 'passport';
import { config } from './config/config.js';

import { URI } from './libs/mongoDB/data/conexion.js';
import  { getUsersData }from'./libs/mongoDB/data/import/UsersData.js'
import { getCourseData } from './libs/mongoDB/data/import/cursesData.js';
import { RouterApi } from './routers/index.js';

import { logErrors, errorHanlder, boomError } from './middlewares/errorHandler.js'


dotenv.config();
const app = express();

const PORT = config.port;
const hostname = config.host;

// Configura express-session
app.use(
  session({
    secret: 'tu_secreto',
    resave: false,
    saveUninitialized: false,
  })
);

// Inicializa Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Habilita el uso de JSON y CORS
app.use(express.json());
app.use(cors());

// Configura las rutas de la API
RouterApi(app);

app.use(logErrors);
app.use(boomError);
app.use(errorHanlder);

app.listen(PORT, () => {
  console.log(`Server on: http://${hostname}:5161/api/v1`);
  console.log(`Mongo link: ${URI}`);
});

// getCourseData()
getUsersData()