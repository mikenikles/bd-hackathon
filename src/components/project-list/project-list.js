import React, { Component } from 'react';
import getRebase from '../../utils/rebase'
import bathroom from '../../utils/rebase'
import './project-list.scss';

import { Link } from 'react-router'

const renderStatus = (status) => {
  return status ? 'Finished!' : 'In Progress'
}

class ProjectList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: []
    }
  }

  componentDidMount(){
    getRebase().syncState(`projects`, {
      context: this,
      state: 'projects',
      asArray: true
    })
  }

  render() {
    return (
      <div className="ProjectList u-padding-sides-lg">
        <h1>Project Timeline Dashboard</h1>
        <h2>Your Projects</h2>
        <ul>
        {
          this.state.projects.map((project, idx) => {
            return <li key={idx}>
                <article className="c-project-tile u-margin-bottom-xxlg">
                    <Link to={ "/projects/" + idx}>
                    <div className="delete-later u-margin-bottom-lg"></div>
                    <span className="c-project-tile__title">{project.name}</span>
                    <div className="c-project-tile__status">{ renderStatus(project.completed) }</div>
                    <p className="c-project-tile__description">{project.description}</p>
                    </Link>
                </article>
            </li>
          })
        }
        </ul>
        <div className="u-text-align-center">
            <Link className="c-button c--add" to="/project-setup">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><style type="text/css">
                </style><title>  Shape</title><path class="st0" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zM36 26.4h-9.6V36h-4.8v-9.6H12v-4.8h9.6V12h4.8v9.6H36C36 21.6 36 26.4 36 26.4z"/></svg>
            <div className="u-margin-top-md">Add Project</div>
            </Link>
        </div>
      </div>
    );
  }
}

export default ProjectList;
