import { createClient } from 'redis';

class RedisClient {
    constructor() {
        // Create the Redis client
        this.client = createClient();

        // Handle connection errors
        this.client.on('error', (err) => {
            console.error(`Redis client not connected to the server: ${err.message}`);
        });

        // Log successful connection
        this.client.on('connect', () => {
            console.log('Redis client connected to the server');
        });
    }

    /**
     * Check if Redis client is alive (connected)
     * @returns {boolean}
     */
    isAlive() {
        return this.client.connected;
    }

    /**
     * Get a value for a given key from Redis
     * @param {string} key
     * @returns {Promise<string | null>}
     */
    async get(key) {
        return new Promise((resolve, reject) => {
            this.client.get(key, (err, value) => {
                if (err) reject(err);
                resolve(value);
            });
        });
    }

    /**
     * Set a key-value pair in Redis with an expiration
     * @param {string} key
     * @param {string | number} value
     * @param {number} duration - expiration in seconds
     * @returns {Promise<void>}
     */
    async set(key, value, duration) {
        return new Promise((resolve, reject) => {
            this.client.set(key, value, 'EX', duration, (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    }

    /**
     * Delete a key from Redis
     * @param {string} key
     * @returns {Promise<void>}
     */
    async del(key) {
        return new Promise((resolve, reject) => {
            this.client.del(key, (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    }
}

// Export an instance of RedisClient
const redisClient = new RedisClient();
export default redisClient;
