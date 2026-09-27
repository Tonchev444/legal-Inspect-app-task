import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "../features/fileSlice";
import { apiSlice } from "../services/apiSlice";

export const store = configureStore({
  reducer: {
    documents: fileReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
