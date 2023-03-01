import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import ErrorMessage from "../ErrorMessage";

const Input = (props) => {
  const {
    placeholder,
    type,
    name,
    handleChange,
    errorMessage,
    value,
    showPassword,
    required,
    range,
  } = props;

  const [passwordVisible, setPasswordVisible] = useState(showPassword);

  const handlePasswordChange = () => {
    setPasswordVisible((prevState) => !prevState);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      {type === "text" && (
        <TextField
          fullWidth
          required={required}
          id={name}
          placeholder={placeholder}
          variant="outlined"
          type={type}
          name={name}
          value={value}
          onChange={(e) =>
            handleChange({ name: e.target.name, value: e.target.value })
          }
        />
      )}
      {type === "email" && (
        <TextField
          fullWidth
          required={required}
          id={name}
          placeholder={placeholder}
          variant="outlined"
          type="email"
          name={name}
          value={value}
          onChange={(e) =>
            handleChange({ name: e.target.name, value: e.target.value })
          }
        />
      )}
      {type === "password" && (
        <TextField
          fullWidth
          required={required}
          id={name}
          placeholder={placeholder}
          variant="outlined"
          type={passwordVisible ? "text" : type}
          name={name}
          value={value}
          onChange={(e) =>
            handleChange({ name: e.target.name, value: e.target.value })
          }
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handlePasswordChange}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                sx={{ color: "#fff" }}
              >
                {passwordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            ),
          }}
        />
      )}
      {type === "select" && (
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            name={name}
            value={value || null}
            onChange={(e) =>
              handleChange({
                name: e.target.name,
                value: e.target.value,
              })
            }
          >
            {Array.apply(null, { length: range[1] - range[0] + 1 }).map(
              (item, index) => {
                return (
                  <MenuItem value={range[0] + index}>
                    {range[0] + index}
                  </MenuItem>
                );
              }
            )}
          </Select>
        </FormControl>
      )}
      {type == "textArea" && (
        <Textarea
          fullWidth
          required={required}
          id={name}
          placeholder={placeholder}
          variant="outlined"
          type={type}
          name={name}
          value={value}
          onChange={(e) =>
            handleChange({ name: e.target.name, value: e.target.value })
          }
          minRows={2}
        />
      )}
      {type === "browse" && (
        <Button variant="contained" component="label">
          {placeholder}
          <input
            hidden
            accept="image/*"
            // multiple
            type="file"
            name={name}
            // value={value}
            onChange={(e) =>
              handleChange({ name: e.target.name, value: e.target.files })
            }
          />
        </Button>
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default Input;
