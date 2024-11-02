import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.APP_PORT || 3000;
const HOST = process.env.APP_HOST || 'http://localhost';

const app = express();
app.use(express.json());


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Server running on ${HOST}:${PORT}`);
});
