import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getBooksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wUxXlMuiwuovrvJw2spJ/books';

// Action
export const getBooks = createAsyncThunk('getBooks', async (thunkAPI) => {
  try {
    const response = await fetch(getBooksURL);
    return response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {
    addBook: (state, action) => [...state, action.book],
    removeBook: (state, action) => {
      const filteredBooks = state.filter((book) => book.item_id !== action.item_id);
      const updatedArray = filteredBooks.map((book, index) => ({ ...book, item_id: index + 1 }));
      return [...updatedArray];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true; // eslint-disable-line no-param-reassign
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false; // eslint-disable-line no-param-reassign
        state.data = action.payload; // eslint-disable-line no-param-reassign
      })
      .addCase(getBooks.rejected, (state) => {
        console.log('rejected');
        state.isLoading = false; // eslint-disable-line no-param-reassign
        state.isError = true; // eslint-disable-line no-param-reassign
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
