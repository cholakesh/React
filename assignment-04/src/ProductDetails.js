import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// export default class ProductDetails extends Component {
//   render() {
//     // const params = useParams();
//     // const productName = params.name;
//     const { name } = this.props.match.params;
//     return (
//       <div>
//         <h1>ProductDetails</h1>
//         <br />
//         <h2>Product name: {name}</h2>
//         <Link to="/">Back</Link>
//       </div>
//     );
//   }
// }

const authenticate = (history) => {
  const authenticated = window.confirm('Are you sure you want to view the details?');
  if (!authenticated) {
    history.replace('/products');
  }
  // else {
  //   // alert('Authenticated, hence proceeding ahead and displaying the details.');
  // }
};

const ProductDetailsPage = (props) => {
  const params = useParams();
  const productName = params.name;

  useEffect(() => {
    authenticate(props.history);
  }, [props.history]);

  return (
    <div>
      <h1>ProductDetails</h1>
      <h2>Product name: {productName}</h2>
      <Link to="/">Back</Link>
    </div>
  );
};

export default ProductDetailsPage;
