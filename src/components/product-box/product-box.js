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

  loadProducts(ids) {
    ids.map((id) => {
      loadProduct(id).then((product) => {
        this.setState({
          products: this.state.products.concat([product])
        })
      });
    });
  }

  componentDidMount() {
    this.loadProducts(this.props.ids);
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
