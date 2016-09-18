import React, { Component } from 'react';
import ProductList from '../product-list/product-list';
import { loadProduct } from '../../utils/bdapis';
import './product-box.scss';

class ProductBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    // TODO: replace wit actual products
    loadProduct('10082137').then((product) => {
      console.log(product);
      this.state.products.push(product.data);
    });

    loadProduct('10079777').then((product) => {
      this.state.products.push(product.data);
      console.log(this.state.products);
    });
  }

  render() {
    return (
      <div className="product-box">
        <div className="product-listing">
          This is the container for products of this entry.
          <ProductList data={this.state.products} />
        </div>
      </div>
    );
  }
}

export default ProductBox;
