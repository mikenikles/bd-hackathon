import React, { Component } from 'react';
import ProductDetail from '../product/product-detail';
import './product-list.scss';

class ProductList extends Component {
  render() {
    var products = this.props.products;
    return (
      <div className="product-list">
        {
          products.map((product) => {
            return (
              <ProductDetail
                key={product.data.productId}
                {...product.data}
              />
            )
          })
        }
      </div>
    );
  }
}

export default ProductList;
