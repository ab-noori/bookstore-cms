import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Book book={book} onDelete={() => handleDelete(book.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
