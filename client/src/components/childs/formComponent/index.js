import React, { useCallback, useState } from "react";
import { Button, Grid } from "@mui/material";
import Input from "./Input";
import styles from "./formStyle.module.css";
import getInputs from "./getInputs";
import setSchema from "./validationSchema";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { addUserAsync } from "../../../reducers/users/usersSlice";
function FormComponent() {
  const [userData, setUserData] = useState({});
  const [formType, setFormType] = useState("create");
  const [allInputsErrors, setAllInputsErrors] = useState({});
  const [isLoading, setisLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const dispatch = useDispatch();
  const onInputChange = (values) => {
    const newData = { ...userData };
    if (values.name == "avatar") {
      setImgSrc(
        window.URL.createObjectURL(
          new Blob(values.value, { type: "application/zip" })
        )
      );
      newData[values.name] = values.value[0];
    } else {
      newData[values.name] = values.value;
    }
    setUserData({ ...newData });
  };
  const validateForm = useCallback(async () => {
    let newErrors = {};

    try {
      const validationSchema = setSchema(formType);
      const validationResult = await validationSchema
        .validate(userData, { abortEarly: false })
        .catch((err) => {
          return err;
        });
      if (validationResult?.inner) {
        for (let key of validationResult.inner) {
          newErrors[key.path] = key.message;
        }
        setAllInputsErrors(newErrors);
        throw new Error(`${validationResult.message}`);
      }
      setAllInputsErrors({});
    } catch (error) {
      const errorPrinted =
        Object.values(newErrors).length <= 2
          ? Object.values(newErrors).join(" , ")
          : Object.values(newErrors)[0];
      Swal.fire("Validation Error", errorPrinted, "error");
      throw error;
    }
  }, [formType, userData]);

  const reSetValues = () => {
    setUserData({});
    setImgSrc(null);
    setisLoading(false);
  };

  const submitForm = async () => {
    try {
      await validateForm();
      dispatch(addUserAsync(userData))
        .unwrap()
        .then(() => {
          Swal.fire("Good job!", "User Created Successfully", "success");
          reSetValues();
        })
        .catch((error) => {
          Swal.fire("Error", error.message, "error");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <h2 className={styles.headerTitle}>Basic Details :</h2>
        {imgSrc && (
          <>
            <img className={styles.avatarImg} src={imgSrc} />
          </>
        )}
      </div>

      <div className={styles.formContainer}>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <Grid container spacing={3}>
            {getInputs(formType).map((input, index) => {
              return (
                <Grid key={index + 1} item md={6}>
                  <Input
                    type={input.type}
                    name={input.name}
                    handleChange={onInputChange}
                    errorMessage={allInputsErrors[input.name]}
                    value={userData[input.name]}
                    required={input.required}
                    placeholder={input.placeholder}
                    range={input.range}
                    variant="outlined"
                    color="primary"
                  />
                </Grid>
              );
            })}
          </Grid>

          <Grid
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "end",
            }}
          >
            <Button
              disabled={isLoading}
              variant="contained"
              type="submit"
              onClick={submitForm}
            >
              Submit
            </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default FormComponent;
