import React from 'react'
import getRebase from '../../utils/rebase'
import SpeechRecognition from '../speech-recognition/speech-recognition'

class AddTimelineEntry extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      projects: []
    }

    this.logWork = this.logWork.bind(this)
  }

  componentDidMount(){
    getRebase().syncState(`projects`, {
      context: this,
      state: 'projects',
      asArray: true
    })
  }

  logWork(content) {
    console.log(content)
    const projects = this.state.projects
    const project = projects[this.props.params.id]
    if (!project.timeline) {
      project.timeline = []
    }
    project.timeline.push({
      timestamp: new Date(),
      content: content
    })
    this.setState({
      projects: projects
    })
  }

  render () {
    if (this.state.projects.length === 0) {
      return false
    }



    return (
      <div>
        Log work here
        <SpeechRecognition onEnd={this.logWork} />
      </div>
    )
  }
}

export default AddTimelineEntry;