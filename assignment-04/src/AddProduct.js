import React, { Component } from 'react';
import './AddProduct.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import ProductsJsonApi from './ProductsJsonApi';
// import axios from 'axios';
import { redirect } from 'react-router-dom';
export default class AddProduct extends Component {
  render() {
    // const navigate = useNavigate();
    const initialValues = {
      productName: '',
      quantity: '',
      price: ''
    };

    const validationSchema = Yup.object({
      productName: Yup.string().required('Product Name is required'),
      quantity: Yup.number()
        .required('Quantity is required')
        .positive('Quantity must be a positive number'),
      price: Yup.number().required('Price is required').positive('Price must be a positive number')
    });

    const handleSubmit = (values, { resetForm }) => {
      const newProduct = {
        id: nanoid(10),
        ...values
      };
      ProductsJsonApi.saveNewProducts(newProduct);
      resetForm();
      // this.props.history.push('/products');
      redirect('/products');
      // navigate('/products');
    };

    return (
      <div>
        <h1>Add Product</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div style={{ display: 'flex' }}>
              <label htmlFor="productName">Product Name</label>
              <Field type="text" id="productName" name="productName" />
              <ErrorMessage name="productName" component="div" className="error" />
            </div>

            <div style={{ display: 'flex' }}>
              <label htmlFor="quantity">Quantity</label>
              <Field type="number" id="quantity" name="quantity" />
              <ErrorMessage name="quantity" component="div" className="error" />
            </div>

            <div style={{ display: 'flex' }}>
              <label htmlFor="price">Price</label>
              <Field type="number" id="price" name="price" />
              <ErrorMessage name="price" component="div" className="error" />
            </div>

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    );
  }
}

// export default withRoute(AddProduct);

// export default withFormik({
//   mapPropsToValues({ productName, quantity, price }) {
//     return {
//       productName: productName || '',
//       quantity: quantity || '',
//       price: price || ''
//     };
//   },
//   validationSchema: Yup.object({
//       productName: Yup.string().required('Product Name is required'),
//       quantity: Yup.number()
//         .required('Quantity is required')
//         .positive('Quantity must be a positive number'),
//       price: Yup.number().required('Price is required').positive('Price must be a positive number')
//     })
// })(AddProduct);
