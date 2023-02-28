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
export default function UserCard({ user }) {
  const [isEdit, setIsEdit] = useState(false);
  const [username, setUsername] = useState(user.username);

  const dispatch = useDispatch();
  const openEditMode = () => {
    setIsEdit(true);
  };

  const changeUserName = (e) => {
    setUsername(e.target.value);
    dispatch(changeUserNameAsync({ id: user.id, username: e.target.value }));
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
        <Avatar sx={{ mr: 5 }} variant="rounded" src="avatar1.png" />
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
              onChange={changeUserName}
            />
            <IconButton sx={{ ml: 5 }} onClick={() => setIsEdit(false)}>
              <CheckIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </>
        ) : (
          <IconButton sx={{ ml: 5 }} onClick={openEditMode}>
            <EditIcon sx={{ fontSize: 14 }} />
          </IconButton>
        )}
      </Box>
    </Card>
  );
}
