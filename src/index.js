import express from 'express';
import listenerRoutes from './routes/listener.js';
import configRoutes from './routes/config.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.APP_PORT || 3000;
const HOST = process.env.APP_HOST || 'http://localhost';

const app = express();
app.use(express.json());

// ROUTES LIST
app.use('/kb/config', configRoutes);
app.use('/kb/listener', listenerRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Server running on ${HOST}:${PORT}`);
});
