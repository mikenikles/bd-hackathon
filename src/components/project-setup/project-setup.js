import React, { Component } from 'react';
import getRebase from '../../utils/rebase'
import './project-setup.scss';
import '../../index.scss';

class ProjectSetup extends Component {
    constructor(props) {
      super(props)

      this.state = {
        newProjectName: '',
        newProjectDescription: '',
        newProjectType: 0,
        newBeforeImage: '',
        projects: []
      }

      this.onAddData = this.onAddData.bind(this)
      this.onNewProjectNameChange = this.onNewProjectNameChange.bind(this)
      this.onNewProjectDescription = this.onNewProjectDescription.bind(this)
      this.onAttachBeforePicture = this.onAttachBeforePicture.bind(this)
      this.onSetProjectType = this.onSetProjectType.bind(this)
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

    onBudgetChange(e) {
      let label = document.getElementsByClassName('js-budget-label')[0]

      label.innerHTML = '$' + e.target.value * 1000
      label.style = 'left: ' + ((e.target.value / 250 * 100) - 4) + '%'
    }

    onAttachBeforePicture(e) {
      this.setState({newBeforePicture: e.target.files[0]})
    }

    onSetProjectType(type) {
      this.setState({newProjectType: type})
    }

    onAddData(e) {
      e.preventDefault()

      const projects = this.state.projects

      const newProject = {
        id: Math.random(),
        name: this.state.newProjectName,
        description: this.state.newProjectDescription,
        skill: document.getElementsByClassName('js-skill')[0].value,
        estimatedTime: document.getElementsByClassName('js-estimated-time')[0].value,
        budget: document.getElementsByClassName('js-budget')[0].value,
        newProjectType: this.state.newProjectType,
        timeline: [],
        completed: false
      }
      // Initialize timeline entry
      const timelineEntry = {
        timestamp: Date.now(),
        content: 'Project started. Way to go!',
        media: []
      }


      // Process before image (aka first timeline entry)
      const beforePicture = this.state.newBeforePicture
      if (beforePicture) {
        const storageRef = getRebase().storage().ref()
        const pictureRef = storageRef.child(`projects/${projects.length}/${beforePicture.name}`)
        pictureRef.put(beforePicture).then((snapshot) => {
          console.log('Uploaded the before picture.', snapshot)
          timelineEntry.media.push({
            type: 'image',
            src: snapshot.a.downloadURLs[0]
          })
          newProject.timeline.push(timelineEntry)

          projects.push(newProject)

          this.setState({
            projects: projects
          })
          this.props.history.push('/projects/' + (projects.length - 1))
        })
      } else {
        newProject.timeline.push(timelineEntry)

        projects.push(newProject)

        this.setState({
          projects: projects
        })
        this.props.history.push('/projects/' + (projects.length - 1))
      }
    }

  render() {
    return (
      <div className="ProjectList u-padding-sides-lg">
        <h1>Project Setup</h1>
        <p>Welcome to your project timeline NAME. To get you started we need a little info to get you setup.</p>
        <form onSubmit={this.onAddData}>
          <label>Project Name</label>
          <input type="text" className="u-margin-bottom-lg" placeholder="ie: Kitchen Renovation" onChange={this.onNewProjectNameChange} value={this.state.newProjectName} />
          <section className="u-margin-bottom-xxxlg">
          <h2>Project Type</h2>
          <ul className="c-list c--unlist c-radio-list">
              <li className="u-margin-bottom-xxlg" onClick={() => this.onSetProjectType(0)}><label className="c-radio-list c-radio-list__label"><input type="radio" name="project-type" value="new-home"></input><div className="c-radio-list__indicator"></div>New Home or Structure</label></li>
              <li className="u-margin-bottom-xxlg" onClick={() => this.onSetProjectType(1)}><label className="c-radio-list c-radio-list__label"><input type="radio" name="project-type" value="reno-indoor"></input><div className="c-radio-list__indicator"></div>Renovating Indoor Spaces</label></li>
              <li className="u-margin-bottom-xxlg" onClick={() => this.onSetProjectType(2)}><label className="c-radio-list c-radio-list__label"><input type="radio" name="project-type" value="reno-outdoor"></input><div className="c-radio-list__indicator"></div>Renovating Outdoor Areas</label></li>
              <li className="u-margin-bottom-xxlg" onClick={() => this.onSetProjectType(3)}><label className="c-radio-list c-radio-list__label"><input type="radio" name="project-type" value="decor-furniture"></input><div className="c-radio-list__indicator"></div>Decorating or Furniture</label></li>
              <li className="u-margin-bottom-xxlg" onClick={() => this.onSetProjectType(4)}><label className="c-radio-list c-radio-list__label"><input type="radio" name="project-type" value="updating-interior"></input><div className="c-radio-list__indicator"></div>Updating Interior Features</label></li>
              <li className="u-margin-bottom-xxlg" onClick={() => this.onSetProjectType(5)}><label className="c-radio-list c-radio-list__label"><input type="radio" name="project-type" value="updating-exterior"></input><div className="c-radio-list__indicator"></div>Updating Interior Features</label></li>
          </ul>
          </section>
          <section className="u-margin-bottom-xxlg">
              <h5 className="u-margin-bottom-lg">Before Pictures</h5>
              <div className="u-display-flex u--align-center c-image-input">
              <svg className="c-icon c--large c--brand" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><style type="text/css">
                </style><title>  Shape</title><path className="st0" d="M24 0C10.8 0 0 10.8 0 24s10.8 24 24 24 24-10.8 24-24S37.2 0 24 0zM36 26.4h-9.6V36h-4.8v-9.6H12v-4.8h9.6V12h4.8v9.6H36C36 21.6 36 26.4 36 26.4z"/></svg>
                <span className="u-padding-left-lg">Add before images<svg className="c-icon c--small u-margin-left-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.7 36.7"><title>  Shape</title><path d="M47.7 9.6c0-2.2-1.5-3.5-3.6-3.7 -0.8-0.1-1.5-0.1-2.3 0 -3.9 0.6-7.1-0.5-9.5-3.9 -1.1-1.6-2.8-2.1-4.8-2 -2.5 0.1-5.1-0.2-7.6 0.1 -1.4 0.1-3.2 0.7-4 1.7 -2.7 3.4-6 4.9-10.3 4.1 -0.3-0.1-0.6 0-0.9 0C1.3 6 0 7.2 0 10.6c0 7.1 0 14.2 0 21.3 0 3.5 1.3 4.8 4.9 4.8 6.3 0 12.7 0 19 0 6.5 0 13 0 19.5 0 2.6 0 4.3-1.4 4.3-3.7C47.8 25.2 47.7 17.4 47.7 9.6zM23.8 30.9c-5.9 0-10.6-4.7-10.5-10.6 0-5.9 4.8-10.6 10.7-10.5 5.8 0.1 10.4 4.8 10.4 10.6C34.4 26.2 29.7 30.9 23.8 30.9zM43 11.9c-0.5 0-1.4-1-1.3-1.4 0.1-0.6 0.8-1.5 1.4-1.6 0.5-0.1 1.2 0.7 2.3 1.5C44.3 11.2 43.7 11.9 43 11.9z"/><path d="M23.9 12.3c4.5 0 7.9 3.5 7.9 8 0 4.4-3.6 8-8 8 -4.4 0-7.9-3.6-7.9-8.1C15.9 15.8 19.4 12.3 23.9 12.3z"/></svg>
                <input className="c-image-input__input" onChange={this.onAttachBeforePicture} type="file" accept="image/*;capture=camera" />
                </span>
                </div>
          </section>
          <section>
              <label>Project Description</label>
              <textarea className="u-margin-bottom-lg" placeholder="ie: Modernize kitchen with maple cabinets and granite countertops" onChange={this.onNewProjectDescription} value={this.state.newProjectDescription} />
          </section>
          <section className="u-margin-bottom-xxlg">
              <h5 className="u-margin-bottom-lg u-margin-top-md">Skill Level</h5>
              <div className="u-display-flex u--space-between">
                <label>Beginner</label><label>Intermediate</label><label>Advanced</label>
              </div>
              <input className="c-range js-skill" type="range" min="1" max="3" step="1"></input>
              <h5>Time to Complete (Approximate)</h5>
              <div className="u-display-flex u--space-between">
                <label>1 &gt; Day</label><label>Weekend</label><label>Week</label><label>Month</label><label>3 Month</label><label>Year</label>
              </div>
              <input className="c-range js-estimated-time" type="range" min="1" max="6" step="1"></input>
              <h5>Budget (Approximate)</h5>
              <label className="js-budget-label c-budget__label"></label>
              <input className="js-budget c-range c-budget__range u-margin-bottom-xxlg" onChange={this.onBudgetChange} type="range" min="0" max="250" step="1"></input>
              <div className="u-display-flex u--space-between">
                <label>0</label><label>$250k</label>
              </div>
          </section>

          <button className="c-button c--primary c--full-width">Add Project</button>

        </form>
      </div>
    );
  }
}

export default ProjectSetup;
