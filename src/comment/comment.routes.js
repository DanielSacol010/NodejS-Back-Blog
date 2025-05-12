import { Router } from "express";
import { validateCreateComment } from "../middlewares/comment-validators.js";
import { createComment } from "./comment.controller.js";

const router = Router();

/**
 * @swagger
 * /comment/create:
 *   post:
 *     summary: Crea un nuevo comentario
 *     tags:
 *       - Comment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               postId:
 *                 type: string
 *                 description: ID del post al que pertenece el comentario
 *               content:
 *                 type: string
 *                 description: Contenido del comentario
 *               author:
 *                 type: string
 *                 description: Autor del comentario
 *             required:
 *               - postId
 *               - content
 *               - author
 *     responses:
 *       201:
 *         description: Comentario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 comment:
 *                   $ref: '#/components/schemas/Comment'
 *       400:
 *         description: Datos inválidos o faltantes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post("/create", validateCreateComment, createComment);

export default router;