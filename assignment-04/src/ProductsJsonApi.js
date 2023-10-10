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

  static saveNewProducts(newProduct) {
    axios
      .post('http://localhost:3001/products', newProduct)
      .then((response) => {
        console.log(response.data); // Handle the response data
      })
      .catch((error) => {
        console.error(error); // Handle the error
      });
  }
}
