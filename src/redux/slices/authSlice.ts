import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useRouter } from "next/navigation";

let initialState = {
  user: [],
  isAuth: false,
  token: "",
  userRole: "",
};
export const login = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const response = await axios.post(
        "https://wild-pink-spider-gown.cyclic.app/api/v1/user/login",
        {
          email,
          password,
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuth = false;
      state.token = "";
      state.user = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      // Handle fulfilled state
      state.isAuth = true;
      state.user = action.payload.user;
      // state.token = action.payload.token;
      // state.userRole = action.payload.userRole;
    });
    builder.addCase(login.rejected, (state, action) => {
      // Handle rejected state
    });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
