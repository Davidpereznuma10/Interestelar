import { MongoClient } from 'mongodb';
import { config } from '../../../config/config.js';

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const HOST = encodeURIComponent(config.dbHost);
const DATABASE = encodeURIComponent(config.dbName);

const URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DATABASE}`;

class MongoLib {
  constructor() {
    this.client = null;
    this.database = DATABASE;
    this.connect();
  }

  async connect() {
    if (!this.client) {
      try {
        this.client = await MongoClient.connect(URI);
        console.log(`Conexión a MongoDB establecida en la base de datos "${this.database}"`);
      } catch (error) {
        console.error('Error al conectar con MongoDB:', error);
        throw error;
      }
    }
  }

  async find(collection, query) {
    return await this.client.db(this.database)
      .collection(collection)
      .find(query)
      .toArray();
  }

  async findOne(collection, filter) {
    return await this.client.db(this.database)
      .collection(collection)
      .findOne(filter);
  }

  async updateOne(collection, filter, data) {
    return await this.client.db(this.database)
      .collection(collection)
      .updateOne(filter, { $set: data });
  }

  async insertData(collectionName, data) {
    try {
      const collection = this.client.db(this.database).collection(collectionName);
      await collection.insertMany(data);
      console.log(`Datos insertados en la colección "${collectionName}" de la base de datos "${this.database}" correctamente.`);
    } catch (error) {
      console.error('Error al insertar datos en MongoDB:', error);
      throw error;
    }
  }
}

export { MongoLib, URI };
