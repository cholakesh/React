import React from 'react';
import Product from './Product';

const ProductsList = ({ products }) => {
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsList;
