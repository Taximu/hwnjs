/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-unresolved
import { object, string } from 'joi';

const JoiSchema = object({
  id: string().required().normalize(),

  login: string().required().email().normalize(),

  password: string()
    .min(16)
    .max(32)
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9]{16,30}$'))
    .normalize(),

  age: string().required().normalize(),

  isDeleted: string().required().normalize(),
}).options({ abortEarly: false });

const creationValidator = (req, _res, next) => {
  const result = JoiSchema.validate(req.body);
  console.log(result);
  const { error } = result;
  const valid = error == null;
  console.log(`request is valid? ${valid}`);
  if (!valid) {
    _res.status(422).json({
      message: 'Invalid request',
    });
  } else {
    next();
  }
};

module.exports = creationValidator;
