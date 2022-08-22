import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import BooksGrid from "./BooksGrid";

const Bookshelf = ({ title, bookshelfCode, shelvedBooks, onBookshelfUpdate }) => {
  const [bookshelfBooks, setBookshelfBooks] = useState([]);

  useEffect(() => {
    setBookshelfBooks(shelvedBooks.filter((book) => book.shelf === bookshelfCode));

    return () => {};
    
  }, [shelvedBooks]);

  return (
    <div className="bookshelf">
      <h1 className="bookshelf-title">{title}</h1>
      <div className="bookshelf-books">
        <BooksGrid
          shelvedBooks={bookshelfBooks}
          onBookshelfUpdate={onBookshelfUpdate}
        />
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  bookshelfCode: PropTypes.string.isRequired,
  shelvedBooks: PropTypes.array.isRequired,
  onBookshelfUpdate: PropTypes.func.isRequired,
};

export default Bookshelf;
