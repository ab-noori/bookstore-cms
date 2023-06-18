// BookForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import './BookForm.scss';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      // Check if any field is empty
      return;
    }
    const newBook = {
      item_id: Date.now().toString(),
      title,
      author,
      category: 'Non-Fiction',
    };
    dispatch(addBook(newBook)).then(() => {
      setTitle('');
      setAuthor('');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend><h2>ADD NEW BOOK</h2></legend>
        <input
          className="title"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="author"
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button className="submit-btn" type="submit">ADD BOOK</button>
      </fieldset>
    </form>
  );
};

export default BookForm;
