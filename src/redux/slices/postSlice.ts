import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let initialState = {};

const postSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = postSlice.actions;

export default postSlice.reducer;
