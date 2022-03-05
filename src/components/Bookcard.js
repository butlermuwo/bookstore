import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/books';
import progressBar from '../Assets/progress.png';
import '../styles/book.css';

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

  const percentage = Math.floor(Math.random() * 99);

  return (
    <div>
      {bookStore.map(({
        itemId, category, title,
      }) => (
        <li key={itemId} className="book-container d-flex">
          <div className="general-info d-flex">
            <span className="genre">{}</span>
            <h3 className="title">{title}</h3>
            <span className="author">{category}</span>
            <ul className="book-management d-flex">
              <li><button type="button">Comments</button></li>
              <li>
                {' '}
                <button type="button" onClick={() => handleRemove(itemId)}>Delete</button>
              </li>
              <li><button type="button">Edit</button></li>
            </ul>
          </div>
          <div className="completion-detail d-flex">
            <img className="progress-bar" src={progressBar} alt="progress-bar" />
            <div className="completion-text d-flex">
              <span className="completion">
                {percentage}
                %
              </span>
              <span className="completed-word">Completed</span>
            </div>
          </div>
          <div className="current-chapter d-flex">
            <span className="current-chapter-span">Current Chapter</span>
            <span className="current-chapter-value">
              Chapter
              {' '}
              {}

            </span>
            <button type="button">Update Changes</button>
          </div>
        </li>
      ))}
    </div>
  );
}

export default Bookcard;
