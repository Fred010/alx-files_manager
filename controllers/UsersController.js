import crypto from 'crypto';
import dbClient from '../utils/db';

class UsersController {
  static async postNew(req, res) {
    try {
      const { email, password } = req.body;

      // Validate email
      if (!email) {
        return res.status(400).json({ error: 'Missing email' });
      }

      // Validate password
      if (!password) {
        return res.status(400).json({ error: 'Missing password' });
      }

      // Check if email already exists in the database
      const existingUser = await dbClient.db.collection('users').findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Already exist' });
      }

      // Hash the password using SHA1
      const hashedPassword = crypto.createHash('sha1').update(password).digest('hex');

      // Insert the new user into the database
      const result = await dbClient.db.collection('users').insertOne({
        email,
        password: hashedPassword,
      });

      // Return the new user's id and email
      return res.status(201).json({
        id: result.insertedId,
        email,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default UsersController;
