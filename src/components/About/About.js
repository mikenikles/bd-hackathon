import React, { Component } from 'react';
import './About.scss';

import { Link } from 'react-router'

class About extends Component {
  render() {
    return (
      <div className="About">
        <p className="App-intro">
          This is the about page.
        </p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default About;
