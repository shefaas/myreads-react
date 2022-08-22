import { useState } from "react";
import PropTypes from "prop-types";

import * as BooksAPI from "./BooksAPI";

const SearchInput = ({ setShowingResults, setEmptyResult }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (event) => {
    const value = event.target.value;
    resetSearchResults();

    const searchForBooks = async () => {
      const res = await BooksAPI.search(value);
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

SearchInput.propTypes = {
    setShowingResults: PropTypes.func,
    setEmptyResult: PropTypes.bool,
};

export default SearchInput;