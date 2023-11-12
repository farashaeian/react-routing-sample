import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Book from './components/Book';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* not nested route: */}
        {/* <Route path='/' element={<App />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/books' element={<Books />} /> */}

        {/* nested routing ;  */}
        <Route path='/' element={<App />} >
          <Route path='/about-us' element={<About />} />
          <Route path='/books' element={<Books />} />
          <Route path='/books/:bookId' element={<Book />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
