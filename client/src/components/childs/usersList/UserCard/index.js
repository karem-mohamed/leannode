import {
  Box,
  Avatar,
  Card,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeUserNameAsync } from "../../../../reducers/users/usersSlice";
import Swal from "sweetalert2";
export default function UserCard({ user, avg }) {
  const [isEdit, setIsEdit] = useState(false);
  const [username, setUsername] = useState(user.username);

  const dispatch = useDispatch();
  const openEditMode = () => {
    setIsEdit(true);
  };

  const onNameChange = (e) => {
    setUsername(e.target.value);
  };
  const changeUserName = () => {
    const regex = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
    if (!username || !regex.test(username) || username?.length < 8) {
      Swal.fire("Validation Error", "username Not Valid", "error");
      setIsEdit(false);
    } else {
      dispatch(changeUserNameAsync({ id: user._id, username: username }))
        .unwrap()
        .then(() => {
          Swal.fire("Good job!", "username Changed Successfully", "success");
          setIsEdit(false);
        })
        .catch((error) => {
          Swal.fire("Error", error.message, "error");
          setIsEdit(false);
        });
    }
  };

  return (
    <Card sx={{ mb: 1 }}>
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          gap: 6,
        }}
      >
        <Avatar
          sx={{ mr: 1 }}
          variant="rounded"
          src={
            user.age > avg
              ? ""
              : `${process.env.REACT_APP_SERVER_URL}${user.avatar}`
          }
        />
        {!isEdit && (
          <Typography sx={{ flex: 1 }} fontWeight={700}>
            {user.username}
          </Typography>
        )}
        {isEdit ? (
          <>
            <TextField
              fullWidth
              id={"username"}
              placeholder={"type you username"}
              variant="outlined"
              name={"username"}
              value={username}
              onChange={onNameChange}
            />
            <IconButton onClick={changeUserName}>
              <CheckIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </>
        ) : (
          <IconButton onClick={openEditMode}>
            <EditIcon sx={{ fontSize: 14 }} />
          </IconButton>
        )}
      </Box>
    </Card>
  );
}
