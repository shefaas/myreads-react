import PropTypes from "prop-types";

import BookshelfChanger from "./BookshelfChanger";

const Book = ({ book, onBookshelfUpdate }) => {
  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          {book.imageLinks && book.imageLinks.smallThumbnail && (
            <img
              className="book-cover"
              src={book.imageLinks.smallThumbnail}
              alt={book.title}
            />
          )}
          <BookshelfChanger book={book} onBookshelfUpdate={onBookshelfUpdate} />
        </div>

        <p className="book-title">{book.title}</p>
        <p className="book-authors">{book.authors}</p>
      </div>
    </li>
  );
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onBookshelfUpdate: PropTypes.func,
};

export default Book;
