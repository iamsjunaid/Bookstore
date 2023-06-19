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
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, { ...action.book, id: state.length + 1 }];

    case REMOVE_BOOK: {
      const filteredBooks = state.filter((book) => book.id !== action.id);
      const updatedArray = filteredBooks.map((book, index) => ({
        ...book,
        id: index + 1,
      }));
      return [...updatedArray];
    }

    default:
      return state;
  }
};

export default bookReducer;
