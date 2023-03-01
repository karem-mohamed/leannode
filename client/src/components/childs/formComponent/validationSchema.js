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
          /^(?=.*[A-Z])[A-Za-z0-9]+$/,
          "username must container numbers,letters and at least one Capital letter"
        )
        .min(8)
        .required(),
      email: yup.string().email().required(),
      biography: yup.string().min(10).required(),
      age: yup.number().required().positive().integer(),
      avatar: yup.mixed().required(),
    });
  } else {
    return yup.object({
      username: yup.string().required(),
    });
  }
}
