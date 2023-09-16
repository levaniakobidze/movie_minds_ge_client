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
    loginSuccess: (state, { payload }) => {
      state.isAuth = true;
      state.user = payload.user;
    },
    loginFailure: (state, { payload }) => {
      state.isAuth = false;
      state.user = [];
      // state.error = payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = "";
      state.user = [];
    },
  },
});

export const { logout, loginSuccess, loginFailure } = authSlice.actions;

export default authSlice.reducer;
