import React, { Component } from 'react';
import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Product from '../../products/components/product.js';
import ordenador from '../../utils/ordenador';

class Home extends Component {
  state = {
    list: []
  }
  handleOrderClick = (event) => {
    const ordered = ordenador(this.props.data.products);
    this.setState({
      list: ordered
    })
  }
  componentWillMount() {
    this.setState({
      list: this.props.data.products
    })
  }
  render(){
		return(
      <div>
        <Header />
        <div>
          <button onClick={this.handleOrderClick}>ordenar</button>
          <button>disponibles</button>
        </div>
        <Product
          products={this.state.list}
        />
        <Footer />
      </div>
    )
  }
}

export default Home;