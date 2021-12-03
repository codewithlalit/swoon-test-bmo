import { useState } from "react";

const SearchBar = ({ fetchBooks }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    if (title.length !== 0) {
      fetchBooks(title);
    } else {
      alert("Please enter the title.");
    }
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
