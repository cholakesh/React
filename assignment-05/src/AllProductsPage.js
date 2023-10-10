import React, { useEffect, useState } from 'react';
import ProductsList from './ProductsList';
// import { productsData } from './ProductsData';
import ProductsJsonApi from './ProductsJsonApi';

const AllProductsPage = () => {
  // let [state, setState] = useState({
  //   products: []
  // });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductsJsonApi.getAllProducts((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Products List</h1>
      <ProductsList products={products} />
    </div>
  );
};

export default AllProductsPage;
