import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Book from './Book';
import { removeBook } from '../redux/books/booksSlice';

const BookList = ({ books }) => {
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

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BookList;
