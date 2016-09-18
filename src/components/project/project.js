import React, { Component } from 'react';
import getRebase from '../../utils/rebase'
import './project.scss';
import TimelineEntry from './timeline-entry'
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
    const products = project.products || {};

    return (
      <div className="project">
        <section className="c-steps u-padding-sides-lg">
            <h1>{project.name}</h1>
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
            <p>Having a pla and collecting inspiration will make your project go much smoother.
            Think about what you like, what you will need and what skills and tools you will need.</p>
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
            <h2>2. Decisions</h2>
            <p>Now you know what you want to accomplish, it&#39;s time to make some decisions.</p>
            <h4>What I need</h4>
            <label htmlFor="cbox1">Products</label>
            <ul>
              {
                Object.keys(products).map(function (key) {
                  let product = project.products[key]
                  return <li key={key}>
                    <a href={product.url}>
                      <img src={product.image} />
                      <p>{product.title}</p>
                      <p>${product.price} / {product.priceUnit}</p>
                    </a>
                  </li>
                })
              }
            </ul>
            <Link to={`/projects/${this.props.params.id}/search`}>Search for products and tools</Link>
            <hr></hr>
        </section>
        <section className="c-steps u-padding-all-lg">
            <h2>3. Chart Your Progress</h2>
          <section className="c-timeline">
              <div>
                  {
                    timelineEntries.reverse().map((timelineEntry, idx) => {
                      return <TimelineEntry key={idx} {...timelineEntry}/>
                    })
                  }
              </div>
          </section>
          <Link to={`/projects/${this.props.params.id}/add-timeline-entry`}>Add Milestone</Link>
        </section>
        <section className="c-steps u-padding-all-lg">
            <h2>4. Project Complete!</h2>
            <button className="c-button c--primary c--full-width">I'M DONE</button>
            <h5>Actual Time to Complete</h5>
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
      </div>
    );
  }
}

export default Project;
