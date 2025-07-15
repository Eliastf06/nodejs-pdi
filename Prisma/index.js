import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/proyectos', (req, res) => {
  res.json({ message: 'Esta es la ruta GET de mi entidad proyectos (todos los elementos)' });
});

app.post('/proyectos', (req, res) => {
  res.json({ message: 'Esta es la ruta POST de mi entidad proyectos' });
});

app.put('/proyectos/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `Esta es la ruta PUT de mi entidad proyectos con ID: ${id}` });
});

app.delete('/proyectos/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `Esta es la ruta DELETE de mi entidad proyectos con ID: ${id}` });
});


app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de mi_proyecto' });
});


app.listen(PORT, () => {
  console.log(`🚀 Servidor Express/Prisma corriendo en http://localhost:${PORT}`);
  console.log('Presiona CTRL + C para detenerlo.');
});