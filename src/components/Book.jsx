import './styles/Book.css';

const Book = () => (
  <div className="book">
    <article>
      <div className="book-details">
        <p>Book.Genre</p>
        <p>Book.Title</p>
        <p>Book.Author</p>
      </div>
      <div className="interactions">
        <button type="submit">Comments</button>
        <button type="submit">Remove</button>
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
);

export default Book;
