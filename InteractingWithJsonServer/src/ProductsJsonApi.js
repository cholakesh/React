import axios from 'axios';

export default class ProductsJsonApi {
  static getAllProducts(cb) {
    axios
      .get('http://localhost:3001/products')
      .then((response) => cb(response.data))
      .catch((error) => {
        throw error;
      });
  }
}
