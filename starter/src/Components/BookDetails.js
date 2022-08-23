import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const BookDetails = () => {
  const location = useLocation();
  const { book } = location.state;

  return (
    <div style={{margin: 50}}>
        {book.title && <h2>{book.title}</h2>}
        {book.authors && <p className="book-authors">{book.authors}</p>}
      <div>
        {book.imageLinks && book.imageLinks.thumbnail && (
          <img
            className="book-cover"
            src={book.imageLinks.thumbnail}
            alt={book.title}
          />
        )}
      </div>
      {book.description && <p>{book.description}</p>}
    </div>
  );
};

BookDetails.propTypes = {
  book: PropTypes.object,
};

export default BookDetails;
