import React from "react";

const Header = React.memo(() => {
  return (
    <div>
      <h1>Book Search Tool</h1>
      <h3>Please enter the title of the book.</h3>
    </div>
  );
});

export default Header;
