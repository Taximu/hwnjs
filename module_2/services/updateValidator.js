import Joi from 'joi';

const JoiSchema = Joi.object({
  age: Joi.string().required().normalize(),

  login: Joi.string().required().email().normalize(),
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
export default updateValidator;
