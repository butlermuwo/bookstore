import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import '../styles/Form.css';

function Form() {
  const dispatch = useDispatch();

  const [category, setCategory] = useState('fiction');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const submitBookToStore = () => {
    const newBook = {
      itemId: uuidv4(),
      title,
      category,
      author,
    };
    dispatch(addBook(newBook));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.children[1].children[0].value = null;
    e.target.children[1].children[1].value = null;
    e.target.children[1].children[2].value = null;

    setTitle('');
    setAuthor('');
    setCategory('fiction');
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <h2 className="adding-span">ADD NEW BOOK</h2>
        <div className="adding-form d-flex">
          <input className="book-input" type="text" placeholder="Book Title .." onChange={(e) => handleTitleChange(e)} />
          <input className="book-input" placeholder="Author" onChange={(e) => handleAuthorChange(e)} />
          <select className="selector-input" id="books" name="books">
            <option value="Fiction">Fiction</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Romance">Romance</option>
          </select>
          <button type="button" onClick={(e) => submitBookToStore(e)}>ADD BOOK</button>
        </div>
      </form>
    </>
  );
}

export default Form;
