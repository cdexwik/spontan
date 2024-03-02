import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedIn: false,
  userData: {
    userId: "",
    firstName: "",
    lastName: "",
    tag: "",
    email: "",
    friends: [],
    friendRequests: [],
    myActivities: [],
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setUser, setLoggedIn } = userSlice.actions;

export default userSlice.reducer;
