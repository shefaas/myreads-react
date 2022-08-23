import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import BookshelfChanger from "./BookshelfChanger";

const Book = ({ book, onBookshelfUpdate }) => {
  
  return ( 
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <Link to={`/books/${book.id}`} state={{book: book}}>
            {book.imageLinks && book.imageLinks.smallThumbnail && (
              <img
                className="book-cover"
                src={book.imageLinks.smallThumbnail}
                alt={book.title}
              />
            )}
          </Link>
          <BookshelfChanger book={book} onBookshelfUpdate={onBookshelfUpdate} />
        </div>

        {book.title && <p className="book-title">{book.title}</p>}
        {book.authors && <p className="book-authors">{book.authors}</p>}
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object,
  onBookshelfUpdate: PropTypes.func,
};

export default Book;
