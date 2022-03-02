import React from 'react';

export default function form() {
  return (
    <form>
      <input className="book-title" type="text" placeholder="Book Title" />
      <input type="text" placeholder="Category" />
      <button type="submit">ADD BOOK</button>
    </form>
  );
}
