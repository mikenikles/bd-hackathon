import React, { Component } from 'react';
import getRebase from '../../utils/rebase'
import './project.scss';
import TimelineEntry from './timeline-entry'

import { Link } from 'react-router'

class Project extends Component {
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
    if (this.state.projects.length === 0) {
      return false
    }

    const project = this.state.projects[this.props.location.query.id]

    const timelineEntries = project.timeline || []

    return (
      <div className="Project">
        <p className="App-intro">
          This is the Project {"#" + this.props.location.query.id} page.
        </p>
        <p>{project.name}</p>
        <Link to={`/project/add-timeline-entry?id=${this.props.location.query.id}`}>Log Work</Link>
        <p>
          {
            timelineEntries.reverse().map((timelineEntry, idx) => {
              return (
                <div>
                  <TimelineEntry key={idx} {...timelineEntry}/>
                  <hr />
                </div>
              )
            })
          }
        </p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Project;
