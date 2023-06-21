import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getBooksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wUxXlMuiwuovrvJw2spJ/books';

// get books from the API
export const getBooks = createAsyncThunk('getBooks', async (thunkAPI) => {
  try {
    const response = await fetch(getBooksURL);
    return response.json();
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

// Add a book to API
export const addBookURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wUxXlMuiwuovrvJw2spJ/books';
export const postBook = createAsyncThunk('books/addBook', async (book, thunkAPI) => {
  try {
    const response = await fetch(addBookURL, {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Failed to add book');
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});

// Remove a book from API
export const deleteBookURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/wUxXlMuiwuovrvJw2spJ/books';
export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId, thunkAPI) => {
  try {
    const response = await fetch(`${deleteBookURL}/${bookId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    }
    throw new Error('Failed to delete book');
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});

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
      /* eslint-disable-next-line no-param-reassign */
      state.books = state.books.filter(
        (book) => book.item_id !== bookId,
      );
    },
  },
  /* eslint-disable no-param-reassign */
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(postBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postBook.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteBook.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { removeBook } = booksSlice.actions;
export default booksSlice.reducer;
