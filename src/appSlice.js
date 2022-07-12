import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSub: "/r/all/",
};

const appSlice = createSlice({
  name: "currentSub",
  initialState: initialState,
  reducers: {
    changeSub: (state, actions) => {
      state.currentSub = actions.payload;
    },
  },
});

export default appSlice.reducer;
export const { changeSub } = appSlice.actions;
