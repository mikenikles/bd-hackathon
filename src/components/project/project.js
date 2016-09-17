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

    const timelineEntries = [{
      timestamp: 'September 17, 2016',
      content: 'Project started',
      tags: ['new-project'],
      media: [{
        type: 'image',
        src: ''
      }]
    }]

    return (
      <div className="Project">
        <p className="App-intro">
          This is the Project {"#" + this.props.location.query.id} page.
        </p>
        <p>{project.name}</p>
        <p>
          {
            timelineEntries.map((timelineEntry, idx) => {
              return <TimelineEntry key={idx} {...timelineEntry}/>
            })
          }
        </p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Project;
