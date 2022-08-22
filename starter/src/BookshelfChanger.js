import PropTypes from "prop-types";

const BookshelfChanger = ({ book, onBookshelfUpdate }) => {
  const handleChange = async (value) => {
    onBookshelfUpdate({ ...book, shelf: value });
  };

  return (
    <div className="book-shelf-changer">
      {book.shelf && book.shelf !== "none" ? (
        <select
          value={book.shelf}
          onChange={(event) => handleChange(event.target.value)}
        >
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      ) : (
        <select
          value="none"
          onChange={(event) => handleChange(event.target.value)}
        >
          <option value="none" disabled>
            Add to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      )}
    </div>
  );
};

BookshelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  onBookshelfUpdate: PropTypes.func,
};

export default BookshelfChanger;
