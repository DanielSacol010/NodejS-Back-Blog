import { validationResult } from "express-validator";

export const validarfields = (req, res, next) => {
    const errors = validationResult(req)
    //console.log(errors)
    if(!errors.isEmpty()){
        return next(errors)
    }
    next()
}