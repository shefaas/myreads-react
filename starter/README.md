# MyReads Project

This is one of my first project with React (still learning). The project is built using the knowledge of React fundamentals (e.g. State management, Hooks, Routes, Typechecking, etc.) and as a part of the requirements to get _Udacity React Nanodegree_. I used Javascript with `PropTypes` for typechecking, hoping to use Typescript in the near future. APIs and CSS styles are previously provided by [Udacity](www.udacity.com) team.

MyReads enables the user to categorize their books into three different shelves (Currently Reading, Want to Read, Read). The users are also able to add more books from the library (connected with the APIs), and categorize these newly added books into the shelves. Re-categorizing are available as well, so users can always move books from bookshelf to another.


## TL;DR

To run the project:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Project Structure

```bash
├── CONTRIBUTING.md
├── README.md
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms.
├── package.json
├── public
│   ├── favicon.ico
│   └── index.html
└── src
    ├── App.css
    ├── App.js # This is the root of the app.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── Components # The folder that hold all components files
    │   ├── MyReads.js # This is the main component that hold both bookshelves and search page.
    │   ├── Bookshelf.js # The component that can render the three bookshelves, each with its books.
    │   ├── BooksGrid.js # The component that create the books grid inside the bookshelf.
    │   ├── Book.js # The component that render each book with its thumbnail and details.
    │   ├── BookshelfChanger.js # The component that shows select element for each book.
    │   ├── SearchBooks.js # The component for search page that holds search results as a book grid and the search input.
    │   └── SearchInput.js # The component that hold search input and run the actual search.
    ├── icons
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.cs
    └── index.js
```

## Backend Server

APIs in [`BooksAPI.js`](src/BooksAPI.js) are provided by Udacity as follows:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
