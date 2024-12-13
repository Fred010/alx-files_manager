import { MongoClient } from 'mongodb';
import { promisify } from 'util';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    this.client = new MongoClient(`mongodb://${host}:${port}`, {
      useUnifiedTopology: true,
    });

    this.client.connect().then(() => {
      this.db = this.client.db(database);
      console.log('Connected to MongoDB');
    }).catch((err) => {
      console.error('Failed to connect to MongoDB', err);
    });
  }

  isAlive() {
    return this.client.isConnected();
  }

  async closeConnection() {
    return promisify(this.client.close).bind(this.client)();
  }
}

const dbClient = new DBClient();
export default dbClient;
