import joi from "joi";

const validateUserCreation = (user) => {
  const schema = joi.object({
    username: joi
      .string()
      .min(8)
      .regex(
        /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/,
        "username must container numbers and letters"
      )
      .required(),
    name: joi
      .string()
      .regex(
        /^([A-Za-z)])+(\ )*([A-Za-z)])*$/,
        "name must container letters only"
      )
      .required(),
    password: joi
      .string()
      .regex(
        /^(?=.*[A-Z])[A-Za-z0-9]+$/,
        "username must container numbers,letters and at least one Capital letter"
      )
      .required(),
    email: joi.string().required().email(),
    biography: joi.string().min(10).required(),
    age: joi.number().positive().required(),
    avatar: joi.string().required(),
  });
  return schema.validate(user);
};

export default validateUserCreation;
