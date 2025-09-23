import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// import
import chatRoutes from './routes/chat.js';

const app = express();
const PORT = 30223;


// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/chat', chatRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Gemini Chat API is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});