import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onDelete }) => {
  const handleDelete = () => {
    onDelete(book.id);
  };

  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <button type="button" onClick={handleDelete}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
