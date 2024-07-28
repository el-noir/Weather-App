// App.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <div >
      <header >
        <h1>Weather App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/about" >About</Link>
            </li>
            <li>
              <Link to="/contact" >Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer >
        <p>&copy; 2024 Weather App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
