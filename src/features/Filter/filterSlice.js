import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "hot",
};

const filterSlice = createSlice({
  name: "filterSelection",
  initialState: initialState,
  reducers: {
    changeFilter: (state, actions) => {
      state.filter = actions.payload;
    },
  },
});

export default filterSlice.reducer;
export const { changeFilter } = filterSlice.actions;
