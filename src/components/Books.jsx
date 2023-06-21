import AddBook from './AddBook';
import Book from './Book';
import './styles/Books.css';

const Books = () => (
  <div className="books">
    <Book />
    <AddBook />
  </div>
);

export default Books;
