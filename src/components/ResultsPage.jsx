import React from "react";
import "./ResultsPage.css";

import { faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Book from "./Book";

const ResultsPage = ({ books, loader, handleTitleSort, handleDateSort }) => {
  console.log("results rendered");
  return loader ? (
    <h5>Loading ....</h5>
  ) : (
    <div>
      <h4>Results</h4>
      <div style={{ direction: "row", display: "block" }}>
        <p>Sort by: </p>
        <button type='button' onClick={handleTitleSort}>
          Title &nbsp;
          <FontAwesomeIcon icon={faSort} />
        </button>{" "}
        <button type='button' onClick={handleDateSort}>
          Date &nbsp;
          <FontAwesomeIcon icon={faSort} />
        </button>{" "}
      </div>

      <div className='container'>
        {books.map((book) => (
          <Book key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
};
export default ResultsPage;
