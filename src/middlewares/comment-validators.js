import { body } from "express-validator";
import { validarfields } from "./validate-fields.js";
import { handleErrors } from "./handle-errors.js";

export const validateCreateComment = [
    body("username")
        .isLength({ min: 1, max: 50 }).withMessage("Username is required and must be at most 50 characters"),
    body("content")
        .isLength({ min: 1, max: 300 }).withMessage("Content is required and must be at most 300 characters"),
    body("publication")
        .isMongoId().withMessage("Invalid publication ID"),
    validarfields,
    handleErrors
];