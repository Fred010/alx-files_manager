import { MongoClient, ObjectId } from 'mongodb';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const dbName = process.env.DB_DATABASE || 'files_manager';
    const url = `mongodb://${host}:${port}`;

    this.client = new MongoClient(url, { useUnifiedTopology: true });
    this.client.connect()
      .then(() => {
        this.db = this.client.db(dbName);
      })
      .catch((err) => console.error('MongoDB connection error:', err));
  }

  isAlive() {
    return !!this.db;
  }
}

const dbClient = new DBClient();
export default dbClient;
