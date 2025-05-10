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

router.post("/create", validateCreatePublication, createPublication);
router.get("/list", getPublications);
router.get("/listById/:pid", validateGetPublicationById, getPublicationById);
router.put("/update/:id", validateUpdatePublication, updatePublication);
router.delete("/delete/:id", validateDeletePublication, deletePublication);

export default router;
