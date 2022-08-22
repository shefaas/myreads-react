import PropTypes from "prop-types";

import Book from "./Book";

const BooksGrid = ({ shelvedBooks, searchBooks, onBookshelfUpdate }) => {
  return (
    <ol className="books-grid">
      {!searchBooks
        ? shelvedBooks.map((book) => {
            return (
              <div key={book.id}>
                <Book book={book} onBookshelfUpdate={onBookshelfUpdate} />
              </div>
            );
          })
        : searchBooks.map((book) => {
            const shelvedSearchBooks = shelvedBooks.filter(
              (shelvedBook) => shelvedBook.id === book.id
            );
            return shelvedSearchBooks.length > 0 ? (
              <div key={book.id}>
                <Book
                  book={{ ...book, shelf: shelvedSearchBooks[0].shelf }}
                  onBookshelfUpdate={onBookshelfUpdate}
                />
              </div>
            ) : (
              <div key={book.id}>
                <Book book={book} onBookshelfUpdate={onBookshelfUpdate} />
              </div>
            );
          })}
    </ol>
  );
};

BooksGrid.propTypes = {
  shelvedBooks: PropTypes.array.isRequired,
  searchBooks: PropTypes.array,
  onBookshelfUpdate: PropTypes.func,
};

export default BooksGrid;
