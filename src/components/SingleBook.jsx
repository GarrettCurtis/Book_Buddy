import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BookContext from '../context/BookContext';

const SingleBook = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const { user } = useContext(BookContext);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error('Error fetching the book details', error);
      }
    };

    fetchBook();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  const handleCheckout = async () => {
    try {
      await axios.patch(`/api/books/${id}`, {
        available: false,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setBook({ ...book, available: false });
    } catch (error) {
      console.error('Error checking out the book', error);
    }
  };

  const handleReturn = async () => {
    try {
      await axios.patch(`/api/books/${id}`, {
        available: true,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setBook({ ...book, available: true });
    } catch (error) {
      console.error('Error returning the book', error);
    }
  };

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <img src={book.coverimage} alt={book.title} />
      <p>{book.available ? 'Available' : 'Checked Out'}</p>
      {user && (
        <button onClick={book.available ? handleCheckout : handleReturn}>
          {book.available ? 'Checkout' : 'Return'}
        </button>
      )}
    </div>
  );
};

export default SingleBook;

