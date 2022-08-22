import { useState, useEffect } from 'react';
import "./App.css";

import * as BooksAPI from "./BooksAPI";

import MyReads from './Components/MyReads';

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
        <MyReads books={books} setBooks={setBooks} />
    );
}

export default App;