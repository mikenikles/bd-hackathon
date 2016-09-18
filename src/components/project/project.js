import React, { Component } from 'react';
import getRebase from '../../utils/rebase'
import photo from '../../assets/images/pintrest-bathroom.jpg';
import photo2 from '../../assets/images/3d-design.png';
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
        <section className="c-steps u-padding-sides-lg">
            <h2>1. Research &amp; Ideation</h2>
            <p>Having a pla and collecting inspiration will make your project go much smoother.
            Think about what you like, what you will need and what skills and tools you will need.</p>
            <div className="c-block">
                <h4>Inspirations</h4>
                <img src={photo} alt="bathroom"/>
                <div className="u-display-flex u--align-center u-margin-top-lg">
                    <svg className="c-icon c--medium c--brand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><style type="text/css">
                    </style><title>  Shape</title><path className="st0" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zM36 26.4h-9.6V36h-4.8v-9.6H12v-4.8h9.6V12h4.8v9.6H36C36 21.6 36 26.4 36 26.4z"/></svg>
                    <span className="u-padding-left-lg">Add Inspiration</span>
                </div>
            </div>
            <div className="c-block">
                <h4>Design</h4>
                <img src={photo2} alt="bathroom in 3d"/>
                <div className="u-display-flex u--align-center u-margin-top-lg">
                    <svg className="c-icon c--medium c--brand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><style type="text/css">
                    </style><title>  Shape</title><path className="st0" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zM36 26.4h-9.6V36h-4.8v-9.6H12v-4.8h9.6V12h4.8v9.6H36C36 21.6 36 26.4 36 26.4z"/></svg>
                    <span className="u-padding-left-lg">Add Design</span>
                </div>
            </div>
            <h4 className="u-margin-bottom-sm">Notes</h4>
            <textarea className="u-margin-bottom-xlg" placeholder="Measurements and other considerations"/>
            <hr></hr>
        </section>
        <section className="c-steps u-padding-sides-lg u-padding-bottom-xlg">
            <h2 className="u-margin-top-xlg">2. Decisions</h2>
            <p>Now you know what you want to accomplish, it&#39;s time to make some decisions.</p>
            <h4>What I need</h4>
            <label htmlFor="cbox1">Products</label>
            <ul>
              {
                Object.keys(products).map(function (key) {
                  let product = project.products[key]
                  return <li key={key}>
                    <a href={product.url}>
                      <img src={product.image} alt=""/>
                      <p>{product.title}</p>
                      <p>${product.price} / {product.priceUnit}</p>
                    </a>
                  </li>
                })
              }
            </ul>

            <Link to={`/projects/${this.props.params.id}/search`} className="u-display-flex u--align-center u-margin-top-lg"><svg className="c-icon c--medium c--brand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><style type="text/css">
            </style><title>  Shape</title><path className="st0" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zM36 26.4h-9.6V36h-4.8v-9.6H12v-4.8h9.6V12h4.8v9.6H36C36 21.6 36 26.4 36 26.4z"/></svg>
            <span className="u-padding-left-lg">Search for products and tools</span></Link>

            <hr className="u-margin-top-xxlg"></hr>
        </section>
        <section className="c-steps u-padding-sides-lg">
            <h2 className="u-margin-top-xlg">3. Chart Your Progress</h2>
          <section className="c-timeline">
              {
                timelineEntries.reverse().map((timelineEntry, idx) => {
                  return <TimelineEntry key={idx} {...timelineEntry}/>
                })
              }
          </section>

          <div className="u-text-align-center u-margin-bottom-xxxlg">
              <Link className="c-button c--add" to={`/projects/${this.props.params.id}/add-timeline-entry`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><style type="text/css">
                  </style><title>  Shape</title><path class="st0" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zM36 26.4h-9.6V36h-4.8v-9.6H12v-4.8h9.6V12h4.8v9.6H36C36 21.6 36 26.4 36 26.4z"/></svg>
              <div className="u-margin-top-md">Add Milestone</div>
              </Link>
          </div>
          <hr/>
        </section>
        <section className="c-steps u-padding-sides-lg u-margin-bottom-xxxlg">
            <h2>4. Project Complete!</h2>
            <button className="c-button c--primary c--full-width">I&#39;M DONE</button>
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
        <section className="c-steps u-padding-sides-lg u-margin-top-xxlg u-margin-bottom-xxlg">
            <div className="u-display-flex u--align-center">
            <svg className="c-icon c--large c--brand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><style type="text/css">
              </style><title>  Shape</title><path className="st0" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zM36 26.4h-9.6V36h-4.8v-9.6H12v-4.8h9.6V12h4.8v9.6H36C36 21.6 36 26.4 36 26.4z"/></svg>
              <span className="u-padding-left-lg">Add after images<svg className="c-icon c--small u-margin-left-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.7 36.7"><title>  Shape</title><path d="M47.7 9.6c0-2.2-1.5-3.5-3.6-3.7 -0.8-0.1-1.5-0.1-2.3 0 -3.9 0.6-7.1-0.5-9.5-3.9 -1.1-1.6-2.8-2.1-4.8-2 -2.5 0.1-5.1-0.2-7.6 0.1 -1.4 0.1-3.2 0.7-4 1.7 -2.7 3.4-6 4.9-10.3 4.1 -0.3-0.1-0.6 0-0.9 0C1.3 6 0 7.2 0 10.6c0 7.1 0 14.2 0 21.3 0 3.5 1.3 4.8 4.9 4.8 6.3 0 12.7 0 19 0 6.5 0 13 0 19.5 0 2.6 0 4.3-1.4 4.3-3.7C47.8 25.2 47.7 17.4 47.7 9.6zM23.8 30.9c-5.9 0-10.6-4.7-10.5-10.6 0-5.9 4.8-10.6 10.7-10.5 5.8 0.1 10.4 4.8 10.4 10.6C34.4 26.2 29.7 30.9 23.8 30.9zM43 11.9c-0.5 0-1.4-1-1.3-1.4 0.1-0.6 0.8-1.5 1.4-1.6 0.5-0.1 1.2 0.7 2.3 1.5C44.3 11.2 43.7 11.9 43 11.9z"/><path d="M23.9 12.3c4.5 0 7.9 3.5 7.9 8 0 4.4-3.6 8-8 8 -4.4 0-7.9-3.6-7.9-8.1C15.9 15.8 19.4 12.3 23.9 12.3z"/></svg>
              </span>
              </div>
         </section>
      </div>
    );
  }
}

export default Project;
