const AddBook = () => (
  <div>
    <h1>Add New Book</h1>
    <form action="submit">
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Book Author" />
      <button type="submit">
        <span>Add Book</span>
      </button>
    </form>
  </div>
);

export default AddBook;
