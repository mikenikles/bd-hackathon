import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './App.scss';

import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React</h1>
          <p>This is text</p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default App;
