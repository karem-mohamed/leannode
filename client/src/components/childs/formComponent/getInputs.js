export default function getInputs(formType) {
  const allData = {
    create: [
      {
        type: "text",
        name: "username",
        required: true,
        placeholder: "Type Your name",
        variant: "outlined",
        color: "primary",
      },
      {
        type: "text",
        name: "email",
        required: true,
        placeholder: "Type Your Email",
        variant: "outlined",
        color: "primary",
      },
      {
        type: "text",
        name: "name",
        required: true,
        placeholder: "Type Your name",
        variant: "outlined",
        color: "primary",
      },
      {
        type: "text",
        name: "password",
        required: true,
        placeholder: "Type Your Password",
        variant: "outlined",
        color: "primary",
      },
      {
        type: "select",
        name: "age",
        required: true,
        placeholder: "Enter Your Age",
        range: [10, 85],
        variant: "outlined",
        color: "primary",
      },
      {
        type: "textArea",
        name: "description",
        required: true,
        placeholder: "Type description",
        variant: "outlined",
        color: "primary",
      },
      {
        type: "browse",
        name: "avatar",
        required: true,
        placeholder: "upload you image",
        variant: "outlined",
        color: "primary",
      },
    ],
    edit: [
      {
        type: "text",
        name: "username",
        required: true,
        placeholder: "Type Your name",
        variant: "outlined",
        color: "primary",
      },
    ],
  };

  return allData[formType];
}
