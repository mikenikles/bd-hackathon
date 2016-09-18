import React, { Component } from 'react';
import './product-detail.scss';

class ProductDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }
  render() {
    return (
      <div className="product-detail">
        Product Name: Fancy hardwood
        Product Sku Number: {this.props.skuNumber}
        Product Price: $100.00
        Product Image: Wood
      </div>
    );
  }
}

export default ProductDetail;
