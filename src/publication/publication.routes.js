import { Router } from "express";
import {
  validateCreatePublication,
  validateUpdatePublication,
  validateDeletePublication,
  validateGetPublicationById,
  
} from "../middlewares/publication-validators.js";
import { 
    createPublication, 
    getPublications, 
    updatePublication, 
    deletePublication, 
    getPublicationById, 
     } from "./publication.controller.js";

const router = Router();

/**
 * @swagger
 * /publication/create:
 *   post:
 *     summary: Crear una nueva publicación
 *     tags:
 *       - Publication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - course
 *             properties:
 *               title:
 *                 type: string
 *                 maxLength: 50
 *                 example: "Mi publicación"
 *               course:
 *                 type: string
 *                 enum: [Taller III, Tecnología III, Práctica Supervisada]
 *                 example: "Taller III"
 *               content:
 *                 type: string
 *                 example: "Contenido de la publicación"
 *     responses:
 *       201:
 *         description: Publicación creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 publication:
 *                   $ref: '#/components/schemas/Publication'
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error interno del servidor
 */
router.post("/create", validateCreatePublication, createPublication);

/**
 * @swagger
 * /publication/list:
 *   get:
 *     summary: Obtener todas las publicaciones
 *     tags:
 *       - Publication
 *     responses:
 *       200:
 *         description: Lista de publicaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 publications:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Publication'
 *       500:
 *         description: Error interno del servidor
 */
router.get("/list", getPublications);

/**
 * @swagger
 * /publication/listById/{pid}:
 *   get:
 *     summary: Obtener una publicación por su ID
 *     tags:
 *       - Publication
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la publicación (MongoID)
 *     responses:
 *       200:
 *         description: Publicación encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 publication:
 *                   $ref: '#/components/schemas/Publication'
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Publicación no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.get("/listById/:pid", validateGetPublicationById, getPublicationById);

/**
 * @swagger
 * /publication/update/{pid}:
 *   put:
 *     summary: Actualizar una publicación existente
 *     tags:
 *       - Publication
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la publicación (MongoID)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 maxLength: 50
 *               content:
 *                 type: string
 *               course:
 *                 type: string
 *                 enum: [Taller III, Tecnología III, Práctica Supervisada]
 *     responses:
 *       200:
 *         description: Publicación actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 publication:
 *                   $ref: '#/components/schemas/Publication'
 *       400:
 *         description: Datos inválidos o ID inválido
 *       404:
 *         description: Publicación no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.put("/update/:pid", validateUpdatePublication, updatePublication);

/**
 * @swagger
 * /publication/delete/{pid}:
 *   delete:
 *     summary: Eliminar una publicación por su ID
 *     tags:
 *       - Publication
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la publicación (MongoID)
 *     responses:
 *       200:
 *         description: Publicación eliminada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Publicación no encontrada
 *       500:
 *         description: Error interno del servidor
 */
router.delete("/delete/:pid", validateDeletePublication, deletePublication);

export default router;
