import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addUser, getUsers, changeUserName } from "./usersAPI";

const initialState = {
  count: 0,
  avg: 0,
  status: null,
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
        state.status = "loading";
      })
      .addCase(addUserAsync.fulfilled, (state, action) => {
        state.users.unshift(action.payload.newUser);
        state.avg = action.payload.avg;
        console.log(action.payload.avg, "oooooooooooo");
        state.status = "fulfilled";
      })
      .addCase(getUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsersAsync.fulfilled, (state, action) => {
        state.users = action.payload.users;
        state.avg = action.payload.avg;
        console.log(action.payload.avg, "avvvvvvvv");
      })
      .addCase(changeUserNameAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(changeUserNameAsync.fulfilled, (state, action) => {
        const targetUserIndex = state.users.findIndex(
          (user) => user._id == action.payload.user._id
        );
        state.users[targetUserIndex] = {
          ...state.users[targetUserIndex],
          username: action.payload.user.username,
        };
      });
  },
});

// export const { addUser } = usersSlice.actions;

export const selectCount = (state) => state.users.count;

export default usersSlice.reducer;
