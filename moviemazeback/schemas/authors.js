import Joi from "joi-oid"

const schema = Joi.object({
    name: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'The name must be at least 3 characters',
                'string.empty': 'The name cannot be empty',
                'any.required': 'A name is required',
            }
        ),
    last_name: Joi
        .string()
        .min(3)
        .max(140)
        .messages(
            {
                'string.min': 'The last name must be at least 3 characters',
                'string.max': 'The last name cannot exceed 140 characters',
                'string.empty': 'The last name cannot be empty',
                'any.required': 'A last name is required',
            }
        ),
    city: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'The city must be at least 3 characters',
                'string.empty': 'The city cannot be empty',
                'any.required': 'A city is required',
            }
        ),
    country: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'The country must be at least 3 characters',
                'string.empty': 'The country cannot be empty',
                'any.required': 'A country is required',
            }
        ),
    date: Joi
        .date()
        .messages(
            {
            "date.base": "Date must be a type of 'date'",
            }
        ),
    photo: Joi
        .string()
        .required()
        .min(8)
        .uri()
        .messages(
            {
                'string.min': 'The photo must be at least 8 characters',
                'string.empty': 'The photo cannot be empty',
                'any.required': 'A photo is required',
                'string.uri': 'A valid URL is necessary'
            }
        )
})

export default schema