import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  login: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setUserLogin(state, action) {
      state.login = action.payload;
    },
  },
});

export const { setUser, setUserLogin } = userSlice.actions;

export default userSlice.reducer;
