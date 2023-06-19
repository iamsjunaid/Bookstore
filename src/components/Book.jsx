import { useSelector, useDispatch } from 'react-redux';
import './styles/Book.css';
import { removeBook } from '../redux/books/booksSlice';

const Book = () => {
  const booksList = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const removeBookFromList = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>

      {booksList.map((book) => (
        <div key={book.id} className="book">
          <article>
            <div className="book-details">
              <p>Book.Genre</p>
              <p>{book.id}</p>
              <p>{book.title}</p>
              <p>{book.author}</p>
            </div>
            <div className="interactions">
              <button type="submit">Comments</button>
              <button type="submit" onClick={() => removeBookFromList(book.id)}>Remove</button>
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
