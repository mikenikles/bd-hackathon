import React, { Component } from 'react';
import './project.scss';
import TimelineEntry from './timeline-entry'
import '../../index.scss';

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
      <div className="project">
        <section className="c-steps">
            <Link to="/">Home</Link>
            <h1>title</h1>
            <p>Intent paragraph</p>
            <div className="c-attribute">
                <div>
                    <div className="c-attribute__item"></div>
                    <span>Skill Level</span>
                </div>
                <div>
                    <div className="c-attribute__item"></div>
                    <span>Time</span>
                </div>
                <div>
                    <div className="c-attribute__item"></div>
                    <span>Budget</span>
                </div>
                <button className="c-button c--primary c--full-width">Lutton</button>
            </div>
        </section>
        <section className="c-steps">
            <h2>1. Research &amp; Ideation</h2>
            <p>paragraph text</p>
            <div className="c-block">
                <h4>Inspirations</h4>
            </div>
            <div className="c-block">
                <h4>Design</h4>
            </div>
            <h4>Notes</h4>
            <p>A bunch of notes</p>
            <hr></hr>
        </section>
        <section className="c-steps">
            <h2>Decisions</h2>
            <p>paragraph text</p>
            <h4>What I need</h4>
            <input type="checkbox" id="products" value="products"></input> <label for="cbox1">Products</label>
            <input type="checkbox" id="tasks" value="tasks"></input> <label for="cbox2">Tasks</label>
            <hr></hr>
        </section>

        <section className="c-timeline">
            <div>
              {
                timelineEntries.map((timelineEntry) => {
                  return <TimelineEntry {...timelineEntry}/>
                })
              }
            </div>
        </section>
      </div>
    );
  }
}

export default Project;
