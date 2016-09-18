import React from 'react'
import getRebase from '../../utils/rebase'
import AddAudioEntry from './add-audio-entry'
import AddPictureEntry from './add-picture-entry'

class AddTimelineEntry extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      projects: []
    }

    this.addAudioEntry = this.addAudioEntry.bind(this)
    this.addPictureEntry = this.addPictureEntry.bind(this)
  }

  componentDidMount(){
    getRebase().syncState(`projects`, {
      context: this,
      state: 'projects',
      asArray: true
    })
  }

  addAudioEntry(content) {
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

  addPictureEntry(picture) {
    console.log('addPictureEntry', picture)
  }

  render () {
    if (this.state.projects.length === 0) {
      return false
    }

    return (
      <div>
        Log work here
        <AddAudioEntry onAddEntry={this.addAudioEntry}/>
        <AddPictureEntry onPictureEntry={this.addPictureEntry}/>
      </div>
    )
  }
}

export default AddTimelineEntry;