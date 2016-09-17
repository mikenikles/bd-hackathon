import React, { Component } from 'react';
import './login.scss';
import '../../index.scss';

import { Link } from 'react-router'

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <p className="App-intro">
          This is the Login page.
        </p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Login;
