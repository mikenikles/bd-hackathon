import React, { Component } from 'react';
import getRebase from '../../utils/rebase'
import logo from '../../assets/logo.svg';
import './App.scss';

import { Link } from 'react-router'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projects: []
    }

    this.onAddData = this.onAddData.bind(this)
  }

  componentDidMount(){
    getRebase().syncState(`projects`, {
      context: this,
      state: 'projects',
      asArray: true
    })
  }

  onAddData() {
    const projects = this.state.projects
    projects.push({
      id: Math.random(),
      name: 'hello'
    })
    this.setState({
      projects: projects
    })
  }

  render() {
    console.log('PROJECTS', this.state.projects)
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
        <Link to="/login">Login</Link>
        <Link to="/project">Project</Link>
        <Link to="/project-list">Project-list</Link>
        <br />
        <button onClick={this.onAddData}>Add Project</button>
        {
          this.state.projects.map((project) => {
            return <span key={project.id}>{project}</span>
          })
        }
      </div>
    );
  }
}

export default App;
