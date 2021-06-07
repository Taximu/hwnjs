import Joi from 'joi';

const JoiSchema = Joi.object({
  id: Joi.string().required().normalize(),
  login: Joi.string().required().email().normalize(),
  password: Joi.string()
    .min(16)
    .max(32)
    .required()
    .pattern(new RegExp('^[a-zA-Z0-9]{16,30}$'))
    .normalize(),
  age: Joi.string().required().normalize(),
  isDeleted: Joi.string().required().normalize(),
}).options({ abortEarly: false });

const creationValidator = (req, _res, next) => {
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

export default creationValidator;
