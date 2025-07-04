import { Router } from 'express';

const router = Router();
const ENTITY_NAME = 'archivos'; 

router.get(`/${ENTITY_NAME}`, (req, res) => {
  res.json({ message: `Esta es la ruta GET de mi entidad ${ENTITY_NAME} (todos los elementos)` });
});

router.get(`/${ENTITY_NAME}/:id`, (req, res) => {
  const id = req.params.id;
  res.json({ message: `Esta es la ruta GET de mi entidad ${ENTITY_NAME} con el ID ${id}` });
});

router.post(`/${ENTITY_NAME}`, (req, res) => {
  res.json({ message: `Esta es la ruta POST de mi entidad ${ENTITY_NAME}` });
});

router.put(`/${ENTITY_NAME}/:id`, (req, res) => {
  const id = req.params.id;
  res.json({ message: `Esta es la ruta PUT de mi entidad ${ENTITY_NAME} con el ID ${id}` });
});

router.delete(`/${ENTITY_NAME}/:id`, (req, res) => {
  const id = req.params.id;
  res.json({ message: `Esta es la ruta DELETE de mi entidad ${ENTITY_NAME} con el ID ${id}` });
});

export default router;