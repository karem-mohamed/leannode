import * as yup from "yup";

export default function setSchema(formType) {
  if (formType == "create") {
    return yup.object({
      username: yup
        .string()
        .matches(
          /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/,
          "username must container numbers and letters"
        )
        .min(8)
        .required(),
      name: yup
        .string()
        .matches(
          /^([A-Za-z)])+(\ )*([A-Za-z)])*$/,
          "name must container letters only"
        )
        .required(),
      password: yup
        .string()
        .matches(
          /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/,
          "username must container numbers and letters"
        )
        .min(8)
        .required(),
      email: yup.string().email().required(),
      description: yup.string().min(10).required(),
      age: yup.number().required().positive().integer(),
    });
  } else {
    return yup.object({
      username: yup.string().required(),
    });
  }
}
