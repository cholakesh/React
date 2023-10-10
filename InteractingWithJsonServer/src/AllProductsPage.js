import React, { Component } from 'react';
import ProductsList from './ProductsList';
// import { productsData } from './ProductsData';
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
      </div>
    );
  }
}
