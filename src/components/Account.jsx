import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import BookContext from '../context/BookContext';

const Account = () => {
  const { user } = useContext(BookContext);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchUserBooks = async () => {
      if (user) {
        try {
          const response = await axios.get('/api/users/me', {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });
          setBooks(response.data.books);
        } catch (error) {
          console.error('Error fetching user books', error);
        }
      }
    };

    fetchUserBooks();
  }, [user]);

  if (!user) {
    return <div>Please log in to see your account details.</div>;
  }

  return (
    <div className="account-details">
      <h1>Account Details</h1>
      <p>Email: {user.email}</p>
      <h2>Checked Out Books</h2>
      {books.length === 0 ? (
        <p>No books checked out.</p>
      ) : (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              {book.title} by {book.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Account;

