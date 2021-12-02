import { useState } from "react";

const SearchBar = ({ fetchBooks }) => {
  const [title, setTitle] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks(title);
  };

  return (
    <div>
      <form action='#' onSubmit={handleSubmit}>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Search..'
          name='search'
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
