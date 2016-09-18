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

  loadProducts() {
    loadProduct('10082137').then((product) => {
      this.setState({
        products: this.state.products.concat([product])
      })
    });

    loadProduct('10079777').then((product) => {
      this.setState({
        products: this.state.products.concat([product])
      })
    });
  }

  componentDidMount() {
    this.loadProducts();
  }

  render() {
    return (
      <div className="product-box">
        <div className="product-listing">
          <ProductList products={this.state.products} />
        </div>
      </div>
    );
  }
}

export default ProductBox;
