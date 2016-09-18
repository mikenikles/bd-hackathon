import React, { Component } from 'react';
import getRebase from '../../utils/rebase'
import './project-setup.scss';
import '../../index.scss';

import { Link } from 'react-router'

class ProjectSetup extends Component {
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
        <h1>Project Setup</h1>
        <p>Welcome to your project timeline NAME. To get you started we need a little info to get you setup.</p>
        <form onSubmit={this.onAddData}>
          <label>Project Name</label>
          <input type="text" className="u-margin-bottom-lg" placeholder="ie: Kitchen Renovation" onChange={this.onNewProjectNameChange} value={this.state.newProjectName} />
          <h2>Project Type</h2>
          <ul className="c-list">
              <li><input type="radio" name="project-type" value="new-home"></input><label>New Home or Structure</label></li>
              <li><input type="radio" name="project-type" value="reno-indoor"></input><label>Renovating Indoor Spaces</label></li>
              <li><input type="radio" name="project-type" value="reno-outdoor"></input><label>Renovating Outdoor Areas</label></li>
              <li><input type="radio" name="project-type" value="decor-furniture"></input><label>Decorating or Furniture</label></li>
              <li><input type="radio" name="project-type" value="updating-interior"></input><label>Updating Interior Features</label></li>
              <li><input type="radio" name="project-type" value="updating-exterior"></input><label>Updating Interior Features</label></li>
          </ul>
          <label>Project Description</label>
          <textarea className="u-margin-bottom-lg" placeholder="ie: Modernize kitchen with maple cabinets and granite countertops" onChange={this.onNewProjectDescription} value={this.state.newProjectDescription} />
          <section className="u-margin-bottom-xxlg">
              <h5>Skill Level</h5>
              <div className="u-display-flex u--space-between">
                <label>Beginner</label><label>Intermediate</label><label>Advanced</label>
              </div>
              <input className="c-range" type="range"></input>
              <h5>Time to Complete (Approximate)</h5>
              <div className="u-display-flex u--space-between">
                <label>1 &gt; Day</label><label>Weekend</label><label>Week</label><label>Month</label><label>3 Month</label><label>Year</label>
              </div>
              <input className="c-range" type="range"></input>
              <h5>Budget (Approximate)</h5>
              <div className="u-display-flex u--space-between">
                <label>0</label><label>$250k</label>
              </div>
              <input className="c-range u-margin-bottom-xxlg" type="range"></input>
          </section>

          <button className="c-button c--primary c--full-width">Next</button>

        </form>
      </div>
    );
  }
}

export default ProjectSetup;
