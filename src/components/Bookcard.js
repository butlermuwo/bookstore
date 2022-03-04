import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/books';

function Bookcard() {
  const bookStore = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!bookStore.length) {
      dispatch(getBooks());
    }
  }, []);

  const handleRemove = (id) => {
    dispatch(removeBook(id));
  };
  return (
    <div>
      {
          bookStore.map(({ itemId, author, title }) => (
            <div key={itemId} className="card-container">
              <p className="book-category">Science Fiction</p>
              <h3>{title}</h3>
              <p>{author}</p>
              <p>Comments</p>
              <span />
              <button type="button" onClick={() => handleRemove(itemId)}>Delete</button>

              <span />
              <p>Edit</p>
              <span />
              <div className="progress-circle">
                <span>8%</span>
                <p>Completed</p>
              </div>
              <hr />
              <p>CURRENT CHAPTER</p>
              <p>Chapter 3: A Lesson Learned</p>
              <button type="submit">UPDATE PROGRESS</button>
            </div>
          ))
        }

    </div>
  );
}

export default Bookcard;
