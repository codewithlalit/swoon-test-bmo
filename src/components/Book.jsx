import React from "react";
import "./Book.css";

const Book = ({ book }) => {
  let coverPic;

  let cover = book.isbn ? book.isbn[0] : null;
  if (cover === null) {
    coverPic = null;
  } else {
    coverPic = `https://covers.openlibrary.org/b/isbn/${cover}-M.jpg`;
  }
  // console.log(cover);

  return (
    <div className='card'>
      <h5>{book.title}</h5>
      <h6>Author: {book.author_name}</h6>
      <img src={coverPic} alt='book' />
      <p>
        Publish date: {book.first_publish_year ? book.first_publish_year : null}
      </p>
    </div>
  );
};

export default Book;
