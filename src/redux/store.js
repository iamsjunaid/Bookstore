import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoryReducer from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoryReducer,
  },
});

export default store;
