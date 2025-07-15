// server.js
import express from 'express';
import setupRoutes from './routes/index.js';
import { PrismaClient } from '@prisma/client';

const app = express();
const PORT = process.env.PORT || 3000;

const prisma = new PrismaClient();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de mi-api-express con Prisma' });
});

setupRoutes(app);

process.on('beforeExit', async () => {
  await prisma.$disconnect();
});
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});
process.on('SIGTERM', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor Express/Prisma corriendo en http://localhost:${PORT}`);
  console.log('Presiona CTRL + C para detenerlo.');
});

