import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './styles/Book.css';
import { getBooks, deleteBook } from '../redux/books/booksSlice';

const Book = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const booksArray = data
    ? Object.entries(data).reduce((acc, [id, bookList]) => {
      const booksWithId = bookList.map((book) => ({ ...book, id }));
      return [...acc, ...booksWithId];
    }, [])
    : [];

  const handleDeleteBook = async (id) => {
    try {
      await dispatch(deleteBook(id));
      await dispatch(getBooks());
    } catch (error) {
      console.log(error); // eslint-disable-line no-console
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div>
      {/* Render the book data */}
      {booksArray.map((book) => (
        <div className="book" key={book.id}>
          <article>
            <div className="book-details">
              <p>{book.category}</p>
              <p>{book.title}</p>
              <p>{book.author}</p>
            </div>
            <div className="interactions">
              <button type="submit">Comments</button>
              <button type="submit" onClick={() => handleDeleteBook(book.id)}>Remove</button>
              <button type="submit">Edit</button>
            </div>
          </article>
          <article>
            <div>circle</div>
            <div className="progress-text">
              <p>Book.progress</p>
              <p>Completed</p>
            </div>
          </article>
          <article>
            <div>
              <p>CURRENT CHAPTER</p>
              <p>Book.chapter</p>
            </div>
            <button type="submit">UPDATE PROGRESS</button>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Book;
