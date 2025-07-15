// routes/proyectos.routes.js
import { Router } from 'express';
import prisma from '../lib/prisma.js';

const router = Router();
const ENTITY_NAME = 'proyectos';

router.get(`/${ENTITY_NAME}`, async (req, res) => {
  try {
    const { nombre } = req.query;

    const where = {};
    if (nombre) {
      where.nombre = {
        contains: nombre,
      };
    }

    const allProjects = await prisma.proyecto.findMany({
      where: where
    });
    res.json({
      message: `Esta es la ruta GET de mi entidad ${ENTITY_NAME} (todos los elementos)`,
      data: allProjects
    });
  } catch (e) {
    console.error(`Error al obtener todos los ${ENTITY_NAME}:`, e);
    res.status(500).json({ message: `Error al obtener todos los ${ENTITY_NAME}`, error: e.message });
  }
});

router.get(`/${ENTITY_NAME}/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const project = await prisma.proyecto.findUnique({
      where: { id: id },
    });

    if (!project) {
      return res.status(404).json({ message: `Proyecto con ID ${id} no encontrado` });
    }

    res.json({
      message: `Esta es la ruta GET de mi entidad ${ENTITY_NAME} con el ID ${id}`,
      data: project
    });
  } catch (e) {
    console.error(`Error al obtener ${ENTITY_NAME} con ID ${req.params.id}:`, e);
    res.status(500).json({ message: `Error al obtener ${ENTITY_NAME} por ID`, error: e.message });
  }
});

router.post(`/${ENTITY_NAME}`, async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;

    if (!nombre) {
        return res.status(400).json({ message: 'El campo "nombre" es requerido para crear un proyecto.' });
    }

    const newProject = await prisma.proyecto.create({
      data: {
        nombre,
        descripcion,
      },
    });
    res.status(201).json({
      message: `Esta es la ruta POST de mi entidad ${ENTITY_NAME}`,
      createdProject: newProject
    });
  } catch (e) {
    console.error(`Error al crear ${ENTITY_NAME}:`, e);
    res.status(500).json({ message: `Error al crear ${ENTITY_NAME}`, error: e.message });
  }
});

router.put(`/${ENTITY_NAME}/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    const updatedProject = await prisma.proyecto.update({
      where: { id: id },
      data: {
        nombre,
        descripcion,
      },
    });
    res.json({
      message: `Esta es la ruta PUT de mi entidad ${ENTITY_NAME} con el ID ${id}`,
      updatedProject: updatedProject
    });
  } catch (e) {
    console.error(`Error al actualizar ${ENTITY_NAME} con ID ${req.params.id}:`, e);
    if (e.code === 'P2025') {
        return res.status(404).json({ message: `Proyecto con ID ${req.params.id} no encontrado para actualizar` });
    }
    res.status(500).json({ message: `Error al actualizar ${ENTITY_NAME}`, error: e.message });
  }
});

router.delete(`/${ENTITY_NAME}/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await prisma.proyecto.delete({
      where: { id: id },
    });
    res.json({
      message: `Esta es la ruta DELETE de mi entidad ${ENTITY_NAME} con el ID ${id}`,
      deletedProject: deletedProject
    });
  } catch (e) {
    console.error(`Error al eliminar ${ENTITY_NAME} con ID ${req.params.id}:`, e);
    if (e.code === 'P2025') {
        return res.status(404).json({ message: `Proyecto con ID ${req.params.id} no encontrado para eliminar` });
    }
    res.status(500).json({ message: `Error al eliminar ${ENTITY_NAME}`, error: e.message });
  }
});

export default router;