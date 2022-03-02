import React from 'react';
import Form from './Form';
import Bookcard from './Bookcard';

export default function book() {
  return (
    <div>
      <Bookcard />
      <h2>ADD NEW BOOK</h2>
      <Form />
    </div>
  );
}
