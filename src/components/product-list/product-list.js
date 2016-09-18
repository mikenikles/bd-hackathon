import React, { Component } from 'react';
import ProductDetail from '../product/product-detail';
import './product-list.scss';

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  render() {
    return (
      <div className="product-list">
        Hi I am a product list
        {
          this.state.products.map((product, idx) => {
            return <ProductDetail data={product} />
          })
        }
      </div>
    );
  }
}

export default ProductList;
