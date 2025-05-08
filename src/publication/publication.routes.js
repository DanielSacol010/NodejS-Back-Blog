import { Router } from "express";
import {
  validateCreatePublication,
  validateUpdatePublication,
  validateDeletePublication,
  validateGetPublication,
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
router.get("/:id", validateGetPublication, getPublicationById);
router.put("/update/:pid", validateUpdatePublication, updatePublication);
router.delete("/delete/:pid", validateDeletePublication, deletePublication);

export default router;
