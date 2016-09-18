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

    this.searchTimeout

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
    console.log(product)
    const projects = this.state.projects
    const project = projects[this.props.location.query.id]
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
    e && e.preventDefault()

    const self = this

    if (this.state.searchTerm !== '') {
      searchProduct(this.state.searchTerm).then(function(response) {
        console.log("Search result", response.data.products)

        let products = response.data.products
        const savedProducts = self.state.projects[self.props.location.query.id].products

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
      <div>
        <Link to={`/project?id=${this.props.location.query.id}`}>Done</Link>
        <form onSubmit={this.onSearchSubmit}>
          <label>Search</label>
          <input placeholder="Search Term" onChange={this.onSearchTermChange} value={this.state.searchTerm} />
        </form>
        <div id="searchResults">
          <ul>
          {
            this.state.searchProducts.map((product, idx) => {
              return <li key={idx}>
                <img src={product.image} />
                <p>{product.title}</p>
                <p>${product.price} / {product.priceUnit}</p>
                <button className={product.added} onClick={this.saveProduct.bind(this, product)}>Add to List</button>
              </li>
            })
          }
          </ul>
        </div>
      </div>
    )
  }
}

export default Search;
