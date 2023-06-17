// booksSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/S61FxCfnjF5rOBxTB7gd/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(BOOKS_URL);
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (bookData) => {
  const res = JSON.stringify(bookData);
  const response = await axios.post(BOOKS_URL, res, { headers: { 'Content-Type': 'application/json' } });
  return { ...bookData, id: response.data.item_id };
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`${BOOKS_URL}/${id}`);
  return id;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    isLoading: false,
    books: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = Object.keys(action.payload).map((item) => {
          const book = action.payload[item][0];
          return {
            id: item,
            title: book.title,
            author: book.author,
            category: book.category,
          };
        });
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = state.books.filter((book) => book.id !== action.payload);
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(action.payload);
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default booksSlice.reducer;
