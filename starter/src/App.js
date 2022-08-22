import { useState, useEffect } from 'react';
import "./App.css";

import * as BooksAPI from "./BooksAPI";

import MyRead from "./MyRead";

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const getAllBooks = async () => {
            const res = await BooksAPI.getAll();
            setBooks(res);
        }
        getAllBooks();

        return () => {
            setBooks([]);
        };
        
    }, [])

    return (
        <MyRead books={books} setBooks={setBooks} />
    );
}

export default App;