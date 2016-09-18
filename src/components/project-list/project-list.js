import React, { Component } from 'react';
import getRebase from '../../utils/rebase'
import './project-list.scss';

import { Link } from 'react-router'

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
      <div className="ProjectList">
        <Link to="/">Home</Link>
        <h1>Project Timeline Dashboard</h1>

        <Link to="/project-setup">Project-setup</Link>

        <span>Add a new project to track your:</span>
        <ul className="c-list c--bullets">
            <li>Research &amp; Ideation</li>
            <li>Project Decisions</li>
            <li> Progess Timeline</li>
            <li>Project Completion</li>
        </ul>
        <h2>Your Projects</h2>
        <ul>
        {
          this.state.projects.map((project, idx) => {
            return <li key={idx}>
                <article className="c-project-tile u-margin-bottom-xxlg">
                    <Link to={ "/projects/" + idx}>
                    <div className="delete-later u-margin-bottom-lg"></div>
                    <span className="c-project-tile__title">{project.name}</span>
                    <p className="c-project-tile__description">{project.description}</p>
                    </Link>
                </article>
            </li>
          })
        }
        </ul>
      </div>
    );
  }
}

export default ProjectList;
