import React from 'react'
import getRebase from '../../utils/rebase'
import { searchProduct } from '../../utils/bdapis'

import { Link } from 'react-router'

class Search extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      projects: [],
      searchTerm: '',
      searchProducts: [],
      savedProducts: []
    }

    this.searchTimeout // eslint-disable-line

    this.onSearchSubmit = this.onSearchSubmit.bind(this)
    this.onSearchTermChange = this.onSearchTermChange.bind(this)
    this.saveProduct = this.saveProduct.bind(this)
  }

  componentDidMount(){
    getRebase().syncState(`projects`, {
      context: this,
      state: 'projects',
      asArray: true
    })
  }

  saveProduct(product) {
    const projects = this.state.projects
    const project = projects[this.props.params.id]
    if (!project.products) {
      project.products = {}
    }

    project.products[product.skuNumber] = product

    this.setState({
      projects: projects
    })
  }

  onSearchTermChange(e){
    this.setState({searchTerm: e.target.value})

    clearTimeout(this.searchTimeout)
    this.searchTimeout = setTimeout(() => {
      this.onSearchSubmit();
    }, 1000);
  }

  onSearchSubmit(e){
    e && e.preventDefault() // eslint-disable-line

    const self = this

    if (this.state.searchTerm !== '') {
      searchProduct(this.state.searchTerm).then(function(response) {
        console.log("Search result", response.data.products)

        let products = response.data.products
        const savedProducts = self.state.projects[self.props.params.id].products

        products = products.map(function(product) {
          product.added = savedProducts && savedProducts[product.skuNumber] ? 'added' : ''
          return product;
        })

        console.log("Search result 2", response.data.products)

        self.setState({
          searchProducts: products
        })
      })
    }
  }

  render () {
    if (this.state.projects.length === 0) {
      return false
    }

    return (
      <div className="pinny">
        <div className="pinny__wrapper">
          <div className="pinny__header">
            <h2>Search Results</h2>
            <Link className="close" to={`/projects/${this.props.params.id}`}>Close</Link>
          </div>
          <div className="pinny__content">
            <form onSubmit={this.onSearchSubmit}>
              <input className="search-input u-padding-left-xxxlg" type="text" placeholder="ie: Kitchen tiles" onChange={this.onSearchTermChange} value={this.state.searchTerm} />
            </form>
            <div id="searchResults">
              <ul>
              {
                this.state.searchProducts.map((product, idx) => {
                  return <li className="u-margin-bottom-xlg" key={idx}>
                  <div className="c-product">
                      <div className="c-product__image">
                        <img src={product.image} alt=""/>
                       </div>
                        <div className="c-product__description">
                            <p className="c-product__title">{product.title}</p>
                            <p>${product.price} / {product.priceUnit}</p>
                        </div>
                    </div>
                    <button className={`${product.added} c-button c--primary c--full-width`} onClick={this.saveProduct.bind(this, product)}>Add to List</button>
                  </li>
                })
              }
              </ul>
            </div>
          </div>
          <div className="pinny__footer">
            <Link to={`/projects/${this.props.params.id}`} className="c-button c--primary c--full-width" >Done</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
