import React from 'react';
// import useDispatch hook
import { useDispatch } from 'react-redux';
// import your Action Creators
import {addBook, removeBook} from './redux/books/books';

const dispatch = useDispatch();

const submitBookToStore = () => {
    const newBook = {
        id, // make sure it's unique
        title,
        author
    }

    // dispatch an action and pass it the newBook object (your action's payload)
    dispatch(addBook(newBook));
}

<button onClick={submitBookToStore}>Add Book</button>

export default function form() {
  return (
    <form>
      <input className="book-title" type="text" placeholder="Book Title" />
      <input type="text" placeholder="Category" />
      <button type="submit">ADD BOOK</button>
    </form>
  );
}
