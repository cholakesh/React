import './App.css';
import AllProductsPage from './AllProductsPage';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import AboutPage from './AboutPage';
import { Component } from 'react';
import AddProduct from './AddProduct';
import ProductDetails from './ProductDetails';

class Links extends Component {
  render() {
    return (
      <nav>
        &emsp;
        <NavLink to="/">About</NavLink>
        &emsp;&emsp;
        <NavLink to="/products" exact="true">
          Products
        </NavLink>
      </nav>
    );
  }
}
function App() {
  return (
    <Router>
      <div>
        <Links />
        <Routes>
          <Route path="/" Component={AboutPage} />
          <Route path="/products" element={<AllProductsPage />} />
          <Route path="/addProducts" Component={AddProduct} />
          <Route path="/products/:name" Component={ProductDetails} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
