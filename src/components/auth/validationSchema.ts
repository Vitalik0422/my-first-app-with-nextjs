import Joi from "joi"
import { errorMessages } from "@/common/const/ErrorMessages"


export const schemaValidationLogin = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).messages(errorMessages.email),
    password: Joi.number()
})

export const schemaValidationRegister = Joi.object({
    name: Joi.string().min(3).max(40),
    email: Joi.string().email({ tlds: { allow: false } }).messages(errorMessages.email),
    password: Joi.string()
})