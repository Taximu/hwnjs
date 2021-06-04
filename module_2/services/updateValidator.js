/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
// eslint-disable-next-line import/no-unresolved
import { object, string } from 'joi';

const JoiSchema = object({
  age: string().required().normalize(),

  login: string().required().email().normalize(),
}).options({ abortEarly: true });

const updateValidator = (req, _res, next) => {
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

module.exports = updateValidator;
