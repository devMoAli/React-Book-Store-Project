import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  books: [
    {
      id: uuidv4(),
      title: "Book1",
      author: "Author1",
    },
    {
      id: uuidv4(),
      title: "Book2",
      author: "Author2",
    },
    {
      id: uuidv4(),
      title: "Book3",
      author: "Author3",
    },
    {
      id: uuidv4(),
      title: "Book4",
      author: "Author4",
    },
 
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    },
    showBooks: (state) => state,
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    updateBook: (state, action) => {
      const { id, title, author } = action.payload;
      const isBookExist = state.books.filter((book) => book.id === id);
      if (isBookExist) {
        isBookExist[0].title = title;
        isBookExist[0].author = author;
      }
    },
  },
});

export const { showBooks, addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
