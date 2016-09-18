import React, { Component } from 'react';
import './project-setup.scss';
import '../../index.scss';

import { Link } from 'react-router'

class ProjectSetup extends Component {
  render() {
    return (
      <div className="ProjectSetup">
        <p className="App-intro">
          This is the ProjectSetup page.
        </p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default ProjectSetup;
