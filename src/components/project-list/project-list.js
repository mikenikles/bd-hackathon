import React, { Component } from 'react';
import './project-list.scss';

import { Link } from 'react-router'

class ProjectList extends Component {
  render() {
    return (
      <div className="ProjectList">
        <p className="App-intro">
          This is the ProjectList page.
        </p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default ProjectList;
