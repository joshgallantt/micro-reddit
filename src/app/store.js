import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/Filter/filterSlice";

export const store = configureStore({
  reducer: {
    filterSelection: filterReducer,
  },
});
