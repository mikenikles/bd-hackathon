import React, { Component } from 'react';
import './project.scss';

import { Link } from 'react-router'

class Project extends Component {
  render() {
    return (
      <div className="Project">
        <p className="App-intro">
          This is the Project page.
        </p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Project;
