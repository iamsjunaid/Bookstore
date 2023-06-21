import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getBooks, postBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleChange = (e) => {
    setNewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    });
  };

  const addBookToList = async (e) => {
    e.preventDefault();
    try {
      await dispatch(postBook({
        item_id: uuidv4(),
        title: newBook.title,
        author: newBook.author,
        category: newBook.category,
      }));
      setNewBook({
        title: '',
        author: '',
        category: '',
      });
      await dispatch(getBooks());
    } catch (err) { console.log(err); } // eslint-disable-line no-console
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <form action="submit">
        <input type="text" name="title" id="name" value={newBook.title} placeholder="Book Title" onChange={handleChange} />
        <input type="text" name="author" id="author" value={newBook.author} placeholder="Book Author" onChange={handleChange} />
        <select type="text" id="category" name="category" value={newBook.category} placeholder="Category" onChange={handleChange}>
          <option value="" disabled>Categories</option>
          <option value="horror">Horror</option>
          <option value="fantasy">Fantasy</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="thriller">Thriller</option>
          <option value="biography">Biography</option>
          <option value="mystrry">Mystery</option>
          <option value="programming">Programming</option>
        </select>
        <button type="submit" onClick={addBookToList}>
          <span>Add Book</span>
        </button>
      </form>
    </div>
  );
};

export default AddBook;
