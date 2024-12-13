import { MongoClient } from 'mongodb';

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';

    const url = `mongodb://${host}:${port}`;
    this.client = new MongoClient(url, { useUnifiedTopology: true });
    this.client.connect()
      .then(() => {
        this.db = this.client.db(database);
      })
      .catch((err) => {
        console.error('Failed to connect to MongoDB:', err);
      });
  }

  /**
   * Check if MongoDB connection is alive.
   * @returns {boolean} true if connected, otherwise false.
   */
  isAlive() {
    return this.client && this.client.topology && this.client.topology.isConnected();
  }

  /**
   * Get the number of documents in the 'users' collection.
   * @returns {Promise<number>} Number of users in the collection.
   */
  async nbUsers() {
    if (!this.db) return 0;
    try {
      const usersCollection = this.db.collection('users');
      return await usersCollection.countDocuments();
    } catch (error) {
      console.error('Error counting documents in users collection:', error);
      return 0;
    }
  }

  /**
   * Get the number of documents in the 'files' collection.
   * @returns {Promise<number>} Number of files in the collection.
   */
  async nbFiles() {
    if (!this.db) return 0;
    try {
      const filesCollection = this.db.collection('files');
      return await filesCollection.countDocuments();
    } catch (error) {
      console.error('Error counting documents in files collection:', error);
      return 0;
    }
  }
}

// Export an instance of DBClient
const dbClient = new DBClient();
export default dbClient;
