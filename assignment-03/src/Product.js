import React, { Component } from 'react';

export default class Product extends Component {
  render() {
    const { product } = this.props;
    const { id, productName, quantity, price } = product;

    return (
      <tr>
        <td>{id}</td>
        <td>{productName}</td>
        <td>{quantity}</td>
        <td>{price}</td>
      </tr>
    );
  }
}
