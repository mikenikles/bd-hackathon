import React, { Component } from 'react';
import getRebase from '../../utils/rebase'
import logo from '../../assets/images/logo.png';
import menu from '../../assets/icons/menu.svg';
import phone from '../../assets/icons/phone.svg';
import cart from '../../assets/icons/cart.svg';
import account from '../../assets/icons/account.svg';
import { Link } from 'react-router'
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: []
    }

    this.onAddData = this.onAddData.bind(this)
  }

  componentDidMount(){
    getRebase().syncState(`projects`, {
      context: this,
      state: 'projects',
      asArray: true
    })
  }

  onAddData() {
    const projects = this.state.projects
    this.setState({
      projects: projects
    })
  }

  render() {
    console.log('PROJECTS', this.state.projects)
    return (
      <div className="App">
        <div className="u-display-flex u--space-between c-header">
            <img src={menu} alt="Menu"></img>
            <img src={phone} alt="Phone"></img>
          <Link to="/" className="c-header__logo">
            <img src={logo} alt="logo" />
          </Link>
          <img src={cart} alt="Cart"></img>
          <img src={account} alt="Account"></img>
      </div>
          <h1>Welcome to React</h1>
          <p>This is tet</p>
        { this.props.children }
      </div>
    );
  }
}

export default App;
