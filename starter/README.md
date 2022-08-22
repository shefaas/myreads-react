# MyReads Project

This is one of my first project with React (still learning). The project is built using the knowledge of React fundamentals (e.g. State management, Hooks, Routes, Typechecking, etc.). I used Javascript with `PropTypes` for typechecking, hoping to use Typescript in the near future. APIs and CSS styles are previously provided by [Udacity](www.udacity.com) team.

MyReads enables the user to categorize their books into three different shelves (Currently Reading, Want to Read, Read). The users are also able to add more books from the library (connected with the APIs), and categorize these newly added books into the shelves. Re-categorizing are available as well, so users can always move books from bookshelf to another.


## TL;DR

To run the project:

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Project Structure

```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── Components # to hold all components files
    │   ├── MyReads.js
    │   ├── Bookshelf.js
    │   ├── BooksGrid.js
    │   ├── Book.js
    │   ├── BookshelfChanger.js
    │   ├── SearchBooks.js
    │   ├── SearchInput.js
    │   └── SearchInput.js
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
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
