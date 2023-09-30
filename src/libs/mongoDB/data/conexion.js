const { MongoClient } = require('mongodb');
const { config } = require('../../../config/config');

const HOST = encodeURIComponent(config.dbHost);
const PORT = encodeURIComponent(config.dbPort);
const DATABASE = encodeURIComponent(config.dbName)

const URI = `mongodb://${HOST}:${PORT}/${DATABASE}`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(URI);
    this.database = DATABASE;
  }

  async connect() {
    try {
      const client = await MongoClient.connect(URI);
      return client.db();
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }

  async insertData(databaseName, collectionName, data) {
    try {
      const collection = this.client.db(databaseName).collection(collectionName);
  
      await collection.insertMany(data);
  
      console.log(`Datos insertados en la colección "${collectionName}" de la base de datos "${databaseName}" correctamente.`);
    } catch (error) {
      console.error('Error al insertar datos en MongoDB:', error);
    }
  }
  
  
}

module.exports = { MongoLib, URI };
