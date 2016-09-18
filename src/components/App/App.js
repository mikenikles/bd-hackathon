import React, { Component } from 'react';
import getRebase from '../../utils/rebase'
import logo from '../../assets/logo.svg';
import { Link } from 'react-router'
import './App.scss';

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
    this.setState({
      projects: projects
    })
  }

  render() {
    console.log('PROJECTS', this.state.projects)
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <h1>Welcome to React</h1>
          <p>This is text</p>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
