const ADD_BOOK = 'books/ADD_BOOK';
const REMOVE_BOOK = 'books/REMOVE_BOOK';

const initialState = [
  {
    id: 1,
    title: 'Code Complete',
    author: 'Steve McConnell',
  },
  {
    id: 2,
    title: 'Programming Pearls',
    author: 'Jon Bentley',
  },
  {
    id: 3,
    title: 'Cacking the Coding Interview',
    author: 'Gayle Laakmann',
  },
];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case REMOVE_BOOK:
      return [...state, state.filter((book) => book.id !== action.payload)];

    default:
      return state;
  }
};

export default bookReducer;
