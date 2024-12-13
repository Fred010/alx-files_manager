import express from 'express';
import UsersController from '../controllers/UsersController';

const router = express.Router();

// Endpoint to handle user creation
router.post('/users', UsersController.postNew);

export default router;
