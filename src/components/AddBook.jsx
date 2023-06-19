import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  const addBookToList = (e) => {
    e.preventDefault();
    dispatch(addBook({
      title: newBook.title,
      author: newBook.author,
    }));
    setNewBook({
      title: '',
      author: '',
    });
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <form action="submit">
        <input type="text" name="title" id="name" value={newBook.title} placeholder="Book Title" onChange={handleChange} />
        <input type="text" name="author" id="author" value={newBook.author} placeholder="Book Author" onChange={handleChange} />
        <button type="submit" onClick={addBookToList}>
          <span>Add Book</span>
        </button>
      </form>
    </div>
  );
};

export default AddBook;
