import reviewsReducer from "./slices/reviewsSlice";
import authReducer from "./slices/authSlice";
import postReducer from "./slices/postSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
    auth: authReducer,
    post: postReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
