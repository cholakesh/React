import React from 'react';

const Product = ({ product }) => {
  const { id, productName, quantity, price } = product;

  return (
    <tr>
      <td>{id}</td>
      <td>{productName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
    </tr>
  );
};

export default Product;
