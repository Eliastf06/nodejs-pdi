// server.js
import express from 'express';
import setupRoutes from './routes/index.js'; 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de mi-api-express' });
});

setupRoutes(app);

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor Express corriendo en http://localhost:${PORT}`);
  console.log('Presiona CTRL + C para detenerlo.');
});