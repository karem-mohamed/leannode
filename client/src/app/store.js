import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../reducers/users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
