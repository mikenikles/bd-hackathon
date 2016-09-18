import React, { Component } from 'react';
import getRebase from '../../utils/rebase'
import './project.scss';
import TimelineEntry from './timeline-entry'
import ProductBox from '../product-box/product-box'
import '../../index.scss';

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

    const project = this.state.projects[this.props.params.id]

    const timelineEntries = project.timeline || []
    const products = project.products || ['10082137','10079777']; // TODO replace dummy default data

    return (
      <div className="project">
        <section className="c-steps u-padding-sides-lg">
            <h1>{project.name}</h1>
            <Link to={`/projects/${this.props.params.id}/add-timeline-entry`}>Log Work</Link>

            <p>{project.description}</p>
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
            </div>
        </section>
        <section className="c-steps u-padding-all-lg">
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
        <section className="c-steps u-padding-all-lg">
            <h2>Decisions</h2>
            <p>paragraph text</p>
            <h4>What I need</h4>
            <label for="cbox1">Products</label>
            <ProductBox ids={products}/>
            <Link to={`${this.props.params.id}/search`}>Add Products</Link>
            <input type="checkbox" id="tasks" value="tasks"></input> <label for="cbox2">Tasks</label>
            <hr></hr>
        </section>
        <Link to={`/projects/${this.props.params.id}/add-timeline-entry`}>Log Work</Link>

        <section className="c-timeline">
            <div>
                {
                  timelineEntries.reverse().map((timelineEntry, idx) => {
                    return <TimelineEntry key={idx} {...timelineEntry}/>
                  })
                }
            </div>
        </section>
      </div>
    );
  }
}

export default Project;
