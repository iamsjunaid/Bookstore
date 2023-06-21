import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getBooksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wUxXlMuiwuovrvJw2spJ/books';

// get books from the API
export const getBooks = createAsyncThunk('getBooks', async (thunkAPI) => {
  try {
    const response = await axios.get(getBooksURL);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

// Add a book to API
export const addBookURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wUxXlMuiwuovrvJw2spJ/books';
export const postBook = createAsyncThunk(
  'books/addBook',
  async (book, thunkAPI) => {
    try {
      const response = await axios.post(addBookURL, book, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        return response.data;
      }

      throw new Error('Failed to add book');
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

// Remove a book from API
export const deleteBookURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wUxXlMuiwuovrvJw2spJ/books';
export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (bookId, thunkAPI) => {
    try {
      const response = await axios.delete(`${deleteBookURL}/${bookId}`);

      if (response.status === 200) {
        return response.data;
      }

      throw new Error('Failed to delete book');
    } catch (error) {
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
    books: [],
  },
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => book.item_id !== bookId),
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getBooks.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        data: action.payload,
      }))
      .addCase(getBooks.rejected, (state) => ({
        ...state,
        isLoading: false,
        isError: true,
      }))
      .addCase(postBook.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(postBook.fulfilled, (state) => ({ ...state, isLoading: false }))
      .addCase(postBook.rejected, (state) => ({ ...state, isLoading: false }))
      .addCase(deleteBook.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(deleteBook.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(deleteBook.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { removeBook } = booksSlice.actions;
export default booksSlice.reducer;
