import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';
import './BookList.scss';

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li className="book-list" key={book.id}>
            <Book book={book} onDelete={() => handleDelete(book.id)} />
          </li>
        ))}
      </ul>
      <hr className="Line" />
    </div>
  );
};

export default BookList;
