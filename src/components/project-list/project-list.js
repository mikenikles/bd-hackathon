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
        <h2>Add New Project</h2>
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
              <Link to={ "/project?id=" + idx}>{project.name} <span>{project.description}</span></Link>
            </li>
          })
        }
        </ul>
      </div>
    );
  }
}

export default ProjectList;
