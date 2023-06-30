import Joi from 'joi-oid';

const schema = Joi.object({
    movie_id: Joi
        .objectId()
        .required(),
    name: Joi
        .string()
        .required()
        .min(3)
        .max(30)
        .messages({
            "string.min": "The name must have at least 3 characters",
            "string.max": "The name must have a maximum of 30 characters",
        }),
})

export default schema