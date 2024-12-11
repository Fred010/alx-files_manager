import redisClient from './utils/redis';

(async () => {
    console.log(redisClient.isAlive()); // Should print true if connected
    console.log(await redisClient.get('myKey')); // Should print null (key doesn't exist)

    await redisClient.set('myKey', 12, 5); // Set key with value 12 and expiration of 5 seconds
    console.log(await redisClient.get('myKey')); // Should print 12

    setTimeout(async () => {
        console.log(await redisClient.get('myKey')); // Should print null (key expired)
    }, 1000 * 10); // Wait 10 seconds
})();
