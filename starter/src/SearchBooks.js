import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import BooksGrid from "./BooksGrid";
import SearchInput from "./SearchInput";

const SearchBooks = ({ shelvedBooks, onBookshelfUpdate }) => {
  const [showingResults, setShowingResults] = useState([]);
  const [emptyResult, setEmptyResult] = useState(false);

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <SearchInput
            setShowingResults={setShowingResults}
            setEmptyResult={setEmptyResult}
          />
        </div>
        <div className="search-books-results">
          {showingResults && showingResults.length > 0 && (
            <BooksGrid
              shelvedBooks={shelvedBooks}
              searchBooks={showingResults}
              onBookshelfUpdate={onBookshelfUpdate}
            />
          )}
          {emptyResult && (
            <p className="search-no-results">
              There is no results for the search terms
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

SearchBooks.propTypes = {
  shelvedBooks: PropTypes.array.isRequired,
  onBookshelfUpdate: PropTypes.func,
};

export default SearchBooks;
