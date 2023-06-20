import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Code Complete',
    author: 'Steve McConnell',
    category: 'Programming',
  },
  {
    id: 2,
    title: 'Programming Pearls',
    author: 'Jon Bentley',
    category: 'Programming',
  },
  {
    id: 3,
    title: 'Cacking the Coding Interview',
    author: 'Gayle Laakmann',
    category: 'Programming',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = { ...action.payload, id: state.length + 1 };
      state.push(newBook);
    },
    removeBook: (state, action) => {
      const bookIndex = state.findIndex((book) => book.id === action.payload);
      if (bookIndex !== -1) {
        state.splice(bookIndex, 1);
      }
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
