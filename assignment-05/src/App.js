import './App.css';
import React from 'react';
import AllProductsPage from './AllProductsPage';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import AboutPage from './AboutPage';
function App() {
  return (
    <Router>
      <div>
        <nav>
          &emsp;
          <NavLink to="/" exact="true">
            About
          </NavLink>
          &emsp; &emsp;
          <NavLink to="/products">Products</NavLink>
        </nav>

        <Routes>
          <Route path="/" Component={AboutPage} />
          <Route path="/products" element={<AllProductsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
