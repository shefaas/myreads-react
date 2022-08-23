import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const BookDetails = () => {
  const location = useLocation();
  const { book } = location.state;
  
  return (
    <div className="book">
      <div className="book-top">
        {book.imageLinks && book.imageLinks.thumbnail && (
          <img
            className="book-cover"
            src={book.imageLinks.thumbnail}
            alt={book.title}
          />
        )}
      </div>

      {book.title && <p className="book-title">{book.title}</p>}
      {book.authors && <p className="book-authors">{book.authors}</p>}
    </div>
  );
};

BookDetails.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookDetails;
