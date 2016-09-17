import React, { Component } from 'react';
import './project.scss';
import TimelineEntry from './timeline-entry'

import { Link } from 'react-router'

class Project extends Component {
  render() {
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
          This is the Project page.
        </p>
        <p>
          {
            timelineEntries.map((timelineEntry) => {
              return <TimelineEntry {...timelineEntry}/>
            })
          }
        </p>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Project;
