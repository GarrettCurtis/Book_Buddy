import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BookContext from '../context/BookContext';
import { fetchBooks } from '../api calls';


const Books = () => {
  
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      // This function fetches data from an API
      const getBooks = async () => {
        try {
          const response = await fetchBooks()
          console.log (response)
          setBooks(response.books);
        } catch (error) {
          console.error('Error fetching books:', error);
        }
      };
  
      // Call the fetch function
      getBooks();
    }, []);
  console.log('Books in context:', books); // Debugging line

  return (
    <div>
      <h1>All Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;



