import React from 'react';
import ProductList from './ProductList';
import ProductViewer from './ProductViewer';
import Search from './Search';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      currentProduct: '',
      query: ''
    }

    this.getProducts = this.getProducts.bind(this)
    this.onProductClick = this.onProductClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.changeViewer = this.changeViewer.bind(this)

  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts() {
    axios.get('/api/products')
      .then((response) => {
        this.setState({ products: response.data })
        this.setState({ currentProduct: response.data[0] })

      })
      .catch((error) => {
        console.log(error);
      })
  }

  onProductClick(index) {
    this.setState({ currentProduct: this.state.products[index] })
  }

  handleInputChange(event) {
    this.setState({ query: event.target.value })
  }

  onSearch() {
    event.preventDefault();
    axios.get('/api/products')
      .then((response) => {
        let products = response.data
        let filtered = products.filter(product => product.item.includes(this.state.query))
        this.setState({ products: filtered })
        this.setState({ currentProduct: filtered[0] })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  changeViewer() {
    axios.get('/api/products')
      .then((response) => {
        for (var i = 0; i < response.data.length; i++) {
          if (this.state.currentProduct.item === response.data[i].item) {
            this.setState({ currentProduct: response.data[i] })
          }
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {

    return (
      <div>
        <div>
          <h1>EBID</h1>
          <h3>The jankiest ebay rip-off you'll ever see (probably)</h3>
        </div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleInputChange={this.handleInputChange} onSearch={this.onSearch} />
          </div>
        </nav>
        <div className="row main-container">
          <div className="col-md-7 product-viewer-container">
            <ProductViewer currentProduct={this.state.currentProduct} changeViewer={this.changeViewer} getProducts={this.getProducts} />
          </div>
          <div className="col-md-5 product-list-container">
            <ProductList products={this.state.products} onProductClick={this.onProductClick} />
          </div>
        </div>
      </div>
    )
  }
}