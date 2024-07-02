import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import BookContext from '../context/BookContext';

const Navigation = () => {
  // const { user, setUser } = useContext(BookContext);

  const handleLogout = () => {
    // setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <nav>
      <Link to="/books">Home</Link>
          <Link to="/account">Account</Link>
          <button onClick={handleLogout}>Logout</button>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
    </nav>
  );
};

export default Navigation;

