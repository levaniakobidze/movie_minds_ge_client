import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: [],
  token: "",
  userRole: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: () => {
      console.log("from");
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
