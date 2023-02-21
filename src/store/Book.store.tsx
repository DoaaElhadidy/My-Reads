import { configureStore } from '@reduxjs/toolkit'
import { booksSlice } from '../reducers/Book.reducer';

export const store = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
})
