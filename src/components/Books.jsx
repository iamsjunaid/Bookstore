import AddBook from './AddBook';
import Book from './Book';
import HorizontalBar from './HorizontalBar';
import './styles/Books.css';

const Books = () => (
  <div className="books">
    <Book />
    <HorizontalBar />
    <AddBook />
  </div>
);

export default Books;
