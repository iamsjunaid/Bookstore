import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import './styles/Book.css';
import { getBooks, deleteBook } from '../redux/books/booksSlice';
import ProgressBar from './ProgressBar';

const Book = () => {
  const [setError] = useState(null);
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
      setError(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data.</div>;
  }

  return (
    <div className="books-container">
      {/* Render the book data */}
      {booksArray.map((book) => (
        <div className="book" key={book.id}>
          <article className="container-1">
            <div className="book-details">
              <p className="category">{book.category}</p>
              <p className="title">{book.title}</p>
              <p className="author">{book.author}</p>
            </div>
            <div className="interactions">
              <button type="submit" className="btn">Comments</button>
              <span className="line" />
              <button type="submit" className="btn" onClick={() => handleDeleteBook(book.id)}>Remove</button>
              <span className="line" />
              <button type="submit" className="btn">Edit</button>
            </div>
          </article>
          <article className="container-2">
            <div className="progress-img-container">
              <ProgressBar />
            </div>
            <div className="progress-text">
              <p className="percentage">
                {Math.floor(Math.random() * 101)}
                %
              </p>
              <p className="complete">Completed</p>
            </div>
          </article>
          <article>
            <div className="vertical-bar" />
          </article>
          <article className="container-4">
            <div>
              <p className="current-chapter">CURRENT CHAPTER</p>
              <p className="chapter">Book.chapter</p>
            </div>
            <button type="submit" className="btn-submit"><span>UPDATE PROGRESS</span></button>
          </article>
        </div>
      ))}
    </div>
  );
};

export default Book;
