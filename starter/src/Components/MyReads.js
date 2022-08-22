import { Routes, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";

import * as BooksAPI from "../BooksAPI";

import Bookshelf from "./Bookshelf";
import SearchBooks from "./SearchBooks";

const MyReads = ({ books, setBooks }) => {

  const handleBookshelfUpdate = async (book) => {

    await BooksAPI.update(book, book.shelf);

    let bookInAShelf = false;

    const updateBookshelf = () =>
      books.map((b) => {
        if (b.id === book.id) {
          bookInAShelf = true;
          return { ...b, shelf: book.shelf };
        } else {
          return b;
        }
      });

    setBooks(updateBookshelf);

    if (!bookInAShelf) {
      setBooks(books.concat(book));
    }
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <div className="app">
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyRead</h1>
              </div>

              <div className="list-books-content">
                <Bookshelf
                  title="Currently Reading"
                  bookshelfCode="currentlyReading"
                  shelvedBooks={books}
                  onBookshelfUpdate={handleBookshelfUpdate}
                />
                <Bookshelf
                  title="Want To Read"
                  bookshelfCode="wantToRead"
                  shelvedBooks={books}
                  onBookshelfUpdate={handleBookshelfUpdate}
                />
                <Bookshelf
                  title="Read"
                  bookshelfCode="read"
                  shelvedBooks={books}
                  onBookshelfUpdate={handleBookshelfUpdate}
                />
              </div>
            </div>

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        }
      />
      <Route
        path="/search"
        element={
          <SearchBooks
            shelvedBooks={books}
            onBookshelfUpdate={handleBookshelfUpdate}
          />
        }
      />
    </Routes>
  );
};

MyReads.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default MyReads;
