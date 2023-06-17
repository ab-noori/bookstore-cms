import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/S61FxCfnjF5rOBxTB7gd/books';

export const fetchBooks = createAsyncThunk('users/fetchBooks', async () => {
  try {
    const response = await axios.get(BOOKS_URL);
    return response.data;
  } catch (error) {
    return error;
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    isLoading: false,
    books: [],
    error: null,
  },
  reducers: {
    addBook: (state, action) => {
      const { title, author } = action.payload;
      if (!title || !author) {
        // Check if any field is empty
        return;
      }
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.books = [];
        Object.keys(action.payload).forEach((item) => {
          const book = action.payload[item][0];
          state.books.push({
            id: item, title: book.title, author: book.author, category: book.category,
          });
        });
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
