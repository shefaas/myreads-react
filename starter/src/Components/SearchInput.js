import { useState, useCallback } from "react";
import PropTypes from "prop-types";

import debounce from "lodash/debounce";

import * as BooksAPI from "./../BooksAPI";

const SearchInput = ({ setShowingResults, setEmptyResult }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (value) => {
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


  const debounceInput = useCallback(debounce(handleSearch, 500), []);

  const handleDebounce = (event) => {
    setSearchInput(event.target.value);
    debounceInput(event.target.value);
  }


  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        value={searchInput}
        placeholder="Search by title, author, or ISBN"
        onChange={handleDebounce}
      />
    </div>
  );
};

SearchInput.propTypes = {
  setShowingResults: PropTypes.func,
  setEmptyResult: PropTypes.func,
};

export default SearchInput;
