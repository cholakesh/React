import React, { Component } from 'react';
import ProductsList from './ProductsList';
import { Link } from 'react-router-dom';
import ProductsJsonApi from './ProductsJsonApi';

export default class AllProductsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    ProductsJsonApi.getAllProducts((data) => this.setState({ products: data }));
  }

  render() {
    return (
      <div>
        <h1>Products List</h1>
        <ProductsList products={this.state.products} />
        <Link to="/addProducts">Add Product</Link>
      </div>
    );
  }
}
