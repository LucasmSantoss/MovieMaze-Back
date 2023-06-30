import Joi from "joi-oid";

const schema = Joi.object({
  name: Joi.string().min(2).max(30).messages({
    "string.min": "The name must be at least 2 characters",
    "string.max": "The title must be 30 characters long max",
    "string.empty": "The name cannot be empty",
    "any.required": "A name is required",
  }),
  last_name: Joi.string().min(2).max(25).messages({
    "string.min": "The last name must be at least 2 characters",
    "string.max": "The last name cannot exceed 25 characters",
    "string.empty": "The last name cannot be empty",
    "any.required": "A last name is required",
  }),
  city: Joi.string().min(3).messages({
    "string.min": "The city must be at least 3 characters",
    "string.empty": "The city cannot be empty",
    "any.required": "A city is required",
  }),
  country: Joi.string().min(3).messages({
    "string.min": "The country must be at least 3 characters",
    "string.empty": "The country cannot be empty",
    "any.required": "A country is required",
  }),
  date: Joi.date().raw(),
  photo: Joi.string().uri().messages({
    "string.empty": "The photo cannot be empty",
    "any.required": "A photo is required",
    "string.uri": "A valid URL is necessary",
  }),
   user_id: Joi
        .objectId()
        .messages({
            'invalid': 'user_id is not an objectId'
        }),
        active:Joi.boolean()
});

export default schema;
