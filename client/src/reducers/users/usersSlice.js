import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addUser, getUsers, changeUserName } from "./usersAPI";

const initialState = {
  count: 0,
  avg: 0,
  creationStatus: 0,
  changeNameStatus: 0,
  users: [],
};

export const getUsersAsync = createAsyncThunk(
  "users/fetchUsers",
  async (user) => {
    const response = await getUsers(user);
    return response.data;
  }
);
export const changeUserNameAsync = createAsyncThunk(
  "users/changeUsername",
  async (user) => {
    const response = await changeUserName(user);
    return response.data;
  }
);

export const addUserAsync = createAsyncThunk("users/AddUsers", async (user) => {
  const response = await addUser(user);
  return response.data;
});
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // addUser: (state, action) => {
    //   state.users.push(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUserAsync.pending, (state) => {
        state.creationStatus = 0;
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.creationStatus = 1;
        state.users.unshift(action.payload.newUser);
        state.avg = action.payload.avg;
      })
      .addCase(getUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.avg = action.payload.avg;
      })
      .addCase(changeUserNameAsync.pending, (state) => {
        state.status = "loading";
        state.changeNameStatus = 0;
      })
      .addCase(changeUserNameAsync.fulfilled, (state, action) => {
        const targetUserIndex = state.users.findIndex(
          (user) => user._id == action.payload.user._id
        );
        state.users[targetUserIndex] = {
          ...state.users[targetUserIndex],
          username: action.payload.user.username,
        };

        state.changeNameStatus = 1;
      });
  },
});

// export const { addUser } = usersSlice.actions;

export const selectCount = (state) => state.users.count;

export default usersSlice.reducer;
