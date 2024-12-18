import express from 'express';
import routes from './routes/index';

const app = express();
const PORT = 5000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Use routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
