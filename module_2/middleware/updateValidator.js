import Joi from 'joi';

const JoiSchema = Joi.object({
  age: Joi.string().required().normalize(),
  login: Joi.string().required().email().normalize(),
}).options({ abortEarly: true });

const updateValidator = (req, _res, next) => {
  const result = JoiSchema.validate(req.body);
  const { error } = result;
  const valid = error == null;
  if (!valid) {
    _res.status(422).json({
      message: 'Invalid request',
    });
  } else {
    next();
  }
};

export default updateValidator;
