import { Joi, Segments, celebrate } from 'celebrate';
console.log("VALIDATE")
export const ValidadeRegister = celebrate({
  [Segments.BODY]: {
    image: Joi.string().trim(),
    customer_code: Joi.string().trim(),
    measure_datetime: Joi.date(),
    measure_type: Joi.string().valid('WATER', 'GAS').required(),
    has_confirmed: Joi.boolean(),

  },
});
