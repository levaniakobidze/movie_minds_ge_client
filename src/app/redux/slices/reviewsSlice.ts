import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  reviews: [1, 2, 3],
};

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
});

export const {} = reviewsSlice.actions;

export default reviewsSlice.reducer;
