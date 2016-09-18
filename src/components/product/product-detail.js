import React, { Component } from 'react';
import './product-detail.scss';

class ProductDetail extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="product-detail">
        <div className="product-name">Product Name: {this.props.productName}</div>
        <div className="product-sku">Sku Number: {this.props.skuNumber}</div>
        <div className="product-price">Price: {this.props.priceUnitDetails.priceUnitPerSellUnit} per {this.props.priceUnitDetails.priceUnitName}</div>
        <div className="product-image"><img src={this.props.mainImage.url}/></div>
      </div>
    );
  }
}

export default ProductDetail;
