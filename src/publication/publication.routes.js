import { Router } from "express";
import {
  validateCreatePublication,
  validateUpdatePublication,
  validateDeletePublication,
  validateGetPublicationById,
  validateFilterPublications
} from "../middlewares/publication-validators.js";
import { 
    createPublication, 
    getPublications, 
    updatePublication, 
    deletePublication, 
    getPublicationById, 
    getFilteredPublications } from "./publication.controller.js";

const router = Router();

router.post("/create", validateCreatePublication, createPublication);
router.get("/list", getPublications);
router.get("/list/filter", validateFilterPublications, getFilteredPublications);
router.get("/listById/:id", validateGetPublicationById, getPublicationById);
router.put("/update/:id", validateUpdatePublication, updatePublication);
router.delete("/delete/:id", validateDeletePublication, deletePublication);

export default router;
