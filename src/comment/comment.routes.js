import { Router } from "express";
import { validateCreateComment } from "../middlewares/comment-validators.js";
import { createComment } from "./comment.controller.js";

const router = Router();

// Create a new comment
router.post("/create", validateCreateComment, createComment);

export default router;