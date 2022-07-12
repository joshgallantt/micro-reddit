import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  subreddits: [],
  error: "",
  filtered: [],
  searchParam: "",
};

//Generates pending, fulfilled and rejected action types automatically
export const fetchSubreddits = createAsyncThunk(
  "subreddits/fetchSubreddits",
  async () => {
    const response = await axios(`https://www.reddit.com/subreddits.json`);
    return response.data.data.children;
  }
);

const searchSlice = createSlice({
  name: "subreddits",
  initialState: initialState,
  reducers: {
    setSearch: (state, actions) => {
      state.searchParam = actions.payload;
    },
    setFilter: (state, actions) => {
      state.filtered = actions.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSubreddits.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSubreddits.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSubreddits.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default searchSlice.reducer;
export const { setSearch, setFilter } = searchSlice.actions;
