// routes/index.js
import proyectosRouter from './proyectos.routes.js';
import archivosRouter from './archivos.routes.js'; 

const setupRoutes = (app) => {
  app.use('/', proyectosRouter); 
  app.use('/', archivosRouter); 
};

export default setupRoutes; 