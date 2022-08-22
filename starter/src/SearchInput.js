import { useState, useEffect } from "react";

import * as BooksAPI from "./BooksAPI";

const SearchInput = ({ setShowingResults, setEmptyResult }) => {
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {}, [searchInput]);

  const handleSearch = (event) => {
    const value = event.target.value;
    console.log( {value} );
    resetSearchResults();

    const searchForBooks = async () => {
      const res = await BooksAPI.search(value);
      console.log({ res });
      if (res.error) {
        setEmptyResult(true);
      } else {
        setShowingResults(res);
      }
    };

    setSearchInput(value);

    if (value !== null && value !== "") {
      searchForBooks();
    }
  };

  const resetSearchResults = () => {
    setShowingResults([]);
    setEmptyResult(false);
  };


  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        value={searchInput}
        placeholder="Search by title, author, or ISBN"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
