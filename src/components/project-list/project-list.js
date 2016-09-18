import React, { Component } from 'react';
import getRebase from '../../utils/rebase'
import './project-list.scss';

import { Link } from 'react-router'

class ProjectList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newProjectName: '',
      newProjectDescription: '',
      projects: []
    }

    this.onAddData = this.onAddData.bind(this)
    this.onNewProjectNameChange = this.onNewProjectNameChange.bind(this)
    this.onNewProjectDescription = this.onNewProjectDescription.bind(this)
  }

  componentDidMount(){
    getRebase().syncState(`projects`, {
      context: this,
      state: 'projects',
      asArray: true
    })
  }

  onNewProjectNameChange(e){
    this.setState({newProjectName: e.target.value});
  }

  onNewProjectDescription(e){
    this.setState({newProjectDescription: e.target.value});
  }

  onAddData(e) {
    e.preventDefault()

    const projects = this.state.projects
    projects.push({
      id: Math.random(),
      name: this.state.newProjectName,
      description: this.state.newProjectDescription
    })
    this.setState({
      projects: projects
    })
  }

  render() {
    return (
      <div className="ProjectList">
        <Link to="/">Home</Link>
        <h1>Project Timeline Dashboard</h1>

        <h2>Add New Project</h2>

        <span>Add a new project to track your:</span>
        <ul className="c-list c--bullets">
            <li>Research &amp; Ideation</li>
            <li>Project Decisions</li>
            <li> Progess Timeline</li>
            <li>Project Completion</li>
        </ul>
        <form onSubmit={this.onAddData}>
          <input placeholder="Name" onChange={this.onNewProjectNameChange} value={this.state.newProjectName} />
          <input placeholder="Description" onChange={this.onNewProjectDescription} value={this.state.newProjectDescription} />
          <button>Add Project</button>
        </form>
        <h2>Your Projects</h2>
        <ul>
        {
          this.state.projects.map((project, idx) => {
            return <li key={idx}>
                <article className="c-project-tile u-margin-bottom-xxlg">
                    <Link to={ "/project?id=" + idx}>
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
