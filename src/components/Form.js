import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

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

  const handleValueChange =(e) => {
    setCategory(e.target.value)
  }

  const submitBookToStore = () => {
    const newBook = {
      item_id: uuidv4(),
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
    setCategory('fiction')
  };

  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <h2>ADD NEW BOOK</h2>
        <input type="text" placeholder="Book Title .." onChange={(e) => handleTitleChange(e)} />
        <input className="book-input" placeholder="Author" onChange={(e) => handleAuthorChange(e)} />
        <select id="books" name="option"
         onChange={(e) => handleValueChange(e)}
         value={category}
        >
          <option value="Fiction">Fiction</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Romance">Romance</option>
        </select>
      </form>
      <button type="button" onClick={(e) => submitBookToStore(e)}>ADD BOOK</button>
    </>
  );
}

export default Form;
