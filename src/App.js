import "./App.css";
import { useEffect, useCallback, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResultsPage from "./components/ResultsPage";

//API urls
const baseUrl = "http://openlibrary.org/search.json?q=";

function App() {
  //All the required states.
  const [books, setBooks] = useState([]);
  const [loader, setLoader] = useState(false);
  const [order, setOrder] = useState(true);

  // API call to fetch the search results for keywords.
  const fetchBooks = useCallback(
    async (title) => {
      setLoader(true);

      const res = await fetch(baseUrl + title);
      const data = await res.json();

      const searchResults = await data.docs;
      setBooks(searchResults);
      console.log(books);
      setLoader(false);
    },
    [books]
  );
  // Function to sort the Books array alphabetically(Title).
  const handleTitleSort = useCallback(() => {
    let newSort = books.sort(function (a, b) {
      setOrder(!order);
      return order
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });
    setBooks(newSort);
  }, [books, order]);

  // Function to sort the Books array alphabetically(Title).
  const handleDateSort = useCallback(() => {
    if (books !== undefined) {
      setOrder(!order);
      setBooks(
        books.sort(function (a, b) {
          var dateA = a.first_publish_year;
          var dateB = b.first_publish_year;
          return order ? (dateA < dateB ? 1 : -1) : dateA < dateB ? -1 : 1; // ? -1 : 1 for ascending/increasing order
        })
      );
    }
  }, [books, order]);

  useEffect(() => {}, [books, order]);

  return (
    <div className='App'>
      <Header />
      <SearchBar fetchBooks={fetchBooks} />
      <ResultsPage
        books={books}
        loader={loader}
        handleTitleSort={handleTitleSort}
        handleDateSort={handleDateSort}
      />
    </div>
  );
}

export default App;
