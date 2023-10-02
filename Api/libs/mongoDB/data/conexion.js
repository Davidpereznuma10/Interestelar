const { MongoClient } = require('mongodb');
const { config } = require('../../../config/config');

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword);
const HOST = encodeURIComponent(config.dbHost);
const DATABASE = encodeURIComponent(config.dbName);

const URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DATABASE}`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(URI);
    this.database = DATABASE;
    this.connect();
  }

  async connect() {
    try {
      const client = await MongoClient.connect(URI);
      this.client = client;
      console.log(`Conexión a MongoDB establecida en la base de datos "${this.database}"`);
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  async insertData(collectionName, data) {
    try {
      const collection = this.client.db(this.database).collection(collectionName);

      await collection.insertMany(data);

      console.log(`Datos insertados en la colección "${collectionName}" de la base de datos "${this.database}" correctamente.`);
    } catch (error) {
      console.error('Error al insertar datos en MongoDB:', error);
    }
  }
}

module.exports = { MongoLib, URI };
