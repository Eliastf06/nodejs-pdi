// routes/archivos.routes.js
import { Router } from 'express';
import prisma from '../lib/prisma.js';

const router = Router();
const ENTITY_NAME = 'archivos';

router.get(`/${ENTITY_NAME}`, async (req, res) => {
  try {
    const { nombre } = req.query;

    const where = {};
    if (nombre) {
      where.nombre = { contains: nombre };
    }

    const allFiles = await prisma.archivo.findMany({ where });
    res.json({
      message: `Esta es la ruta GET de mi entidad ${ENTITY_NAME} (todos los elementos)`,
      data: allFiles
    });
  } catch (e) {
    console.error(`Error al obtener todos los ${ENTITY_NAME}:`, e);
    res.status(500).json({ message: `Error al obtener todos los ${ENTITY_NAME}`, error: e.message });
  }
});

router.get(`/${ENTITY_NAME}/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const file = await prisma.archivo.findUnique({
      where: { id: id },
    });

    if (!file) {
      return res.status(404).json({ message: `Archivo con ID ${id} no encontrado` });
    }

    res.json({
      message: `Esta es la ruta GET de mi entidad ${ENTITY_NAME} con el ID ${id}`,
      data: file
    });
  } catch (e) {
    console.error(`Error al obtener ${ENTITY_NAME} con ID ${req.params.id}:`, e);
    res.status(500).json({ message: `Error al obtener ${ENTITY_NAME} por ID`, error: e.message });
  }
});

router.post(`/${ENTITY_NAME}`, async (req, res) => {
  try {
    const { nombre, ruta, tipo, tamano, proyectoId } = req.body;

    if (!nombre ||!ruta) {
        return res.status(400).json({ message: 'Los campos "nombre" y "ruta" son requeridos para crear un archivo.' });
    }

    const newFile = await prisma.archivo.create({
      data: {
        nombre,
        ruta,
        tipo,
        tamano: tamano? parseInt(tamano) : undefined,
        proyecto: proyectoId? { connect: { id: proyectoId } } : undefined,
      },
    });
    res.status(201).json({
      message: `Esta es la ruta POST de mi entidad ${ENTITY_NAME}`,
      createdFile: newFile
    });
  } catch (e) {
    console.error(`Error al crear ${ENTITY_NAME}:`, e);
    res.status(500).json({ message: `Error al crear ${ENTITY_NAME}`, error: e.message });
  }
});

router.put(`/${ENTITY_NAME}/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, ruta, tipo, tamano, proyectoId } = req.body;

    const updatedFile = await prisma.archivo.update({
      where: { id: id },
      data: {
        nombre,
        ruta,
        tipo,
        tamano: tamano? parseInt(tamano) : undefined,
        proyecto: proyectoId? { connect: { id: proyectoId } } : undefined,
      },
    });
    res.json({
      message: `Esta es la ruta PUT de mi entidad ${ENTITY_NAME} con el ID ${id}`,
      updatedFile: updatedFile
    });
  } catch (e) {
    console.error(`Error al actualizar ${ENTITY_NAME} con ID ${req.params.id}:`, e);
    if (e.code === 'P2025') {
        return res.status(404).json({ message: `Archivo con ID ${req.params.id} no encontrado para actualizar` });
    }
    res.status(500).json({ message: `Error al actualizar ${ENTITY_NAME}`, error: e.message });
  }
});

router.delete(`/${ENTITY_NAME}/:id`, async (req, res) => {
  try {
    const { id } = req.params;
    const deletedFile = await prisma.archivo.delete({
      where: { id: id },
    });
    res.json({
      message: `Esta es la ruta DELETE de mi entidad ${ENTITY_NAME} con el ID ${id}`,
      deletedFile: deletedFile
    });
  } catch (e) {
    console.error(`Error al eliminar ${ENTITY_NAME} con ID ${req.params.id}:`, e);
    if (e.code === 'P2025') {
        return res.status(404).json({ message: `Archivo con ID ${req.params.id} no encontrado para eliminar` });
    }
    res.status(500).json({ message: `Error al eliminar ${ENTITY_NAME}`, error: e.message });
  }
});

export default router;