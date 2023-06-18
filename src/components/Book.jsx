import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Book.scss';

const Book = ({ book, onDelete }) => (
  <div className="book-container">
    <div className="left-col">
      <div className="book-details">
        <p className="book-category">{book.category}</p>
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
      </div>
      <ul className="btn-list">
        <li><Button>Comment</Button></li>
        <li>|</li>
        <li><Button onClick={onDelete}>Remove</Button></li>
        <li>|</li>
        <li><Button>Edit</Button></li>
      </ul>
    </div>
    <div className="center-col">
      <div className="progress">
        <div className="progress-bar" />
      </div>
      <div>
        <div className="percentage">
          {Math.floor(Math.random() * 101)}
          %
        </div>
        <div className="percent-completed">Completed</div>
      </div>
    </div>
    <div className="column-divider" />
    <div className="right-col">
      <div>
        <div className="chapters">CURRENT CHAPTER</div>
        <div className="completed-chapter">
          chapter
          {' '}
          {Math.floor(Math.random() * 101)}
        </div>
      </div>
      <button type="button" className="progress-btn">UPDATE PROGRESS</button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
