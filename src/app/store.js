import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/Filter/filterSlice";
import subredditsReducer from "../features/Search/searchSlice";

export const store = configureStore({
  reducer: {
    filterSelection: filterReducer,
    subreddits: subredditsReducer,
  },
});
