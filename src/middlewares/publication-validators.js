import { body, param } from "express-validator"
import { validarfields } from "./validate-fields.js"
import { handleErrors } from "./handle-errors.js"

export const validateCreatePublication = [
    body("title")
        .isLength({ min: 1, max: 50 }).withMessage("Title is required and must be at most 50 characters"),
    body("content")
        .isLength({ min: 1, max: 250 }).withMessage("Content is required and must be at most 250 characters"),
    body("course")
        .isIn(["Taller III", "Tecnología III", "Práctica Supervisada"]).withMessage("Invalid course value"),
    validarfields,
    handleErrors
]

export const validateGetPublicationById = [
    param("pid").isMongoId().withMessage("Invalid publication ID"),
    validarfields,
    handleErrors
]

export const validateUpdatePublication = [
    param("pid").isMongoId().withMessage("Invalid publication ID"),
    body("title")
        .optional()
        .isLength({ min: 1, max: 50 }).withMessage("Title must be at most 50 characters"),
    body("content")
        .optional()
        .isLength({ min: 1, max: 250 }).withMessage("Content must be at most 250 characters"),
    body("course")
        .optional()
        .isIn(["Taller III", "Tecnología III", "Práctica Supervisada"]).withMessage("Invalid course value"),
    validarfields,
    handleErrors
]

export const validateDeletePublication = [
    param("pid").isMongoId().withMessage("Invalid publication ID"),
    validarfields,
    handleErrors
]

