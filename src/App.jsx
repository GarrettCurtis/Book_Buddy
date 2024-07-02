import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import bookLogo from './assets/books.png';
import Navigation from './components/Navigations';
import Books from './components/Books';
import SingleBook from './components/SingleBook';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <header>
        <h1>
          <img id='logo-image' src={bookLogo} alt="Library Logo" />
          Library App
        </h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/books/:id" element={<SingleBook />} />
          <Route path="/books" element={<Books />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/" element={<Books />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

