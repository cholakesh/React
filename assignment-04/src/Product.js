import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  render() {
    const { product } = this.props;
    const { productName, quantity, price } = product;

    return (
      <tr>
        <td>
          <Link to={'/products/' + productName}>{productName}</Link>
        </td>
        <td>{quantity}</td>
        <td>{price}</td>
      </tr>
    );
  }
}
