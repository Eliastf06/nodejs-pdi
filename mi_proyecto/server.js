// server.js
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
// Esto es necesario para que req.body funcione correctamente en las rutas POST y PUT
app.use(express.json());

// --- Rutas de la Entidad 'Proyectos' ---

// Ruta GET /proyectos (Para obtener todos los proyectos)
app.get('/proyectos', (req, res) => {
  res.json({ message: 'Esta es la ruta GET de mi entidad proyectos (todos los elementos)' });
});

// Ruta GET /proyectos/:id (Para obtener un proyecto específico por ID) - Opcional para este ejercicio pero buena práctica
// app.get('/proyectos/:id', (req, res) => {
//   const id = req.params.id;
//   res.json({ message: `Esta es la ruta GET de mi entidad proyectos con ID: ${id}` });
// });

// Ruta POST /proyectos (Para crear un nuevo proyecto)
app.post('/proyectos', (req, res) => {
  // console.log('Cuerpo de la solicitud:', req.body); // Puedes logear el cuerpo para depurar
  res.json({ message: 'Esta es la ruta POST de mi entidad proyectos' });
});

// Ruta PUT /proyectos/:id (Para actualizar un proyecto existente)
app.put('/proyectos/:id', (req, res) => {
  const id = req.params.id;
  // console.log(`Cuerpo de la solicitud para actualizar ${id}:`, req.body);
  res.json({ message: `Esta es la ruta PUT de mi entidad proyectos con ID: ${id}` });
});

// Ruta DELETE /proyectos/:id (Para eliminar un proyecto)
app.delete('/proyectos/:id', (req, res) => {
  const id = req.params.id;
  res.json({ message: `Esta es la ruta DELETE de mi entidad proyectos con ID: ${id}` });
});

// --- Ruta Adicional GET / ---

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de mi-api-express' });
});

// --- Iniciar el Servidor ---

app.listen(PORT, () => {
  console.log(`🚀 Servidor Express corriendo en http://localhost:${PORT}`);
  console.log('Presiona CTRL + C para detenerlo.');
});