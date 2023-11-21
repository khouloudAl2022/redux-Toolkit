import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(
        "http://localhost:3002/books"
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
// create slice book
const bookSlice = createSlice({
  name: "book",
  initialState: { books: null },
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      console.log(action);
    },
    [getBooks.rejected]: (state, action) => {
      console.log(action);
    },
    [getBooks.pending]: (state, action) => {
      console.log(action);
    },
  },
});
export default bookSlice.reducer;
