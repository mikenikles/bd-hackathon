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
      <div className="t-project">
        <Link to="/">Home</Link>
        <h1>title</h1>
        <p>Intent paragraph</p>
        <div class="c-attribute">
            <div>
                <div class="c-attribute__item"></div>
                <span>Skill Level</span>
            </div>
            <div>
                <div class="c-attribute__item"></div>
                <span>Time</span>
            </div>
            <div>
                <div class="c-attribute__item"></div>
                <span>Budget</span>
            </div>
        </div>
        <h2>1. Research &amp; Ideation</h2>
        <p>paragraph text</p>
        



        <p>
          {
            timelineEntries.map((timelineEntry) => {
              return <TimelineEntry {...timelineEntry}/>
            })
          }
        </p>
      </div>
    );
  }
}

export default Project;
