import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Book = ({ book, onDelete }) => (
  <div>
    <h3>{book.title}</h3>
    <p>{book.author}</p>
    <Button onClick={onDelete}>Delete</Button>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
