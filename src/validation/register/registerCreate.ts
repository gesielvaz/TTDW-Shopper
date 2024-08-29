import { Joi, Segments, celebrate } from 'celebrate';
console.log("VALIDATE")
export const ValidadeRegister = celebrate({
  [Segments.BODY]: {
    image: Joi.string().trim().required(),
    customer_code: Joi.string().trim().required(),
    measure_datetime: Joi.date().required(),
    measure_type: Joi.string().valid('WATER', 'GAS').required(),
    has_confirmed: Joi.boolean().required(),
    image_url: Joi.string().trim().optional(),
  },
});
