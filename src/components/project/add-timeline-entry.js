import React from 'react'
import getRebase from '../../utils/rebase'
import AddAudioEntry from './add-audio-entry'
import AddPictureEntry from './add-picture-entry'

class AddTimelineEntry extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      projects: [],
      audioEntry: '',
      pictureEntry: '',
      timelineEntryType: 'audio'
    }

    this.onAddAudioEntry = this.onAddAudioEntry.bind(this)
    this.onAddPictureEntry = this.onAddPictureEntry.bind(this)
    this.renderTimelineEntryType = this.renderTimelineEntryType.bind(this)
    this.saveToTimeline = this.saveToTimeline.bind(this)
  }

  componentDidMount(){
    getRebase().syncState(`projects`, {
      context: this,
      state: 'projects',
      asArray: true
    })
  }

  onAddAudioEntry(content) {
    this.setState({
      audioEntry: content
    })
    // const projects = this.state.projects
    // const project = projects[this.props.params.id]
    // if (!project.timeline) {
    //   project.timeline = []
    // }
    // project.timeline.push({
    //   timestamp: new Date(),
    //   content: content
    // })
    // this.setState({
    //   projects: projects
    // })
  }

  onAddPictureEntry(picture) {
    console.log('addPictureEntry', picture)
    this.setState({
      pictureEntry: picture
    })
    // const storageRef = getRebase().storage().ref()
    // const pictureRef = storageRef.child(`projects/${this.props.params.id}/${picture.name}`)
    // pictureRef.put(picture).then((snapshot) => {
    //   console.log('Uploaded an image.', snapshot)
    // })
  }

  saveToTimeline() {
    const projects = this.state.projects
    const project = projects[this.props.params.id]
    if (!project.timeline) {
      project.timeline = []
    }

    // Initialize timeline entry
    const timelineEntry = {
      timestamp: new Date().now(),
      content: '',
      media: []
    }

    // Add audio entry
    timelineEntry.content = this.state.audioEntry

    // Add image entry
    const picture = this.state.pictureEntry
    const storageRef = getRebase().storage().ref()
    const pictureRef = storageRef.child(`projects/${this.props.params.id}/${picture.name}`)
    pictureRef.put(picture).then((snapshot) => {
      console.log('Uploaded an image.', snapshot)

      timelineEntry.media.push({
        type: 'image',
        src: snapshot.a.downloadURLs[0]
      })

      project.timeline.push(timelineEntry)

      this.setState({
        projects: projects
      })
      this.props.history.push('/projects/' + (projects.length - 1))
    })
  }

  renderTimelineEntryType() {
    switch (this.state.timelineEntryType) {
      case 'audio':
        return <AddAudioEntry onAddEntry={this.onAddAudioEntry}/>
      case 'image':
        return <AddPictureEntry onAddEntry={this.onAddPictureEntry}/>
      case 'question':
      case 'video':
      default:
        return false
    }
  }

  render () {
    if (this.state.projects.length === 0) {
      return false
    }

    return (
      <div>
        <h1>Add to timeline</h1>
        <p>Upload a picture, record your progress or ask a question here. When you're ready, tap the "Save to timeline" button.</p>
        <ul className="timeline-entry-type">
          <li className="audio" onClick={() => this.setState({ timelineEntryType: 'audio' })}>Audio</li>
          <li className="video" onClick={() => this.setState({ timelineEntryType: 'video' })}>Video</li>
          <li className="image" onClick={() => this.setState({ timelineEntryType: 'image' })}>Image</li>
          <li className="question" onClick={() => this.setState({ timelineEntryType: 'question' })}>Question</li>
        </ul>
        { this.renderTimelineEntryType() }

        <button onClick={this.saveToTimeline}>Save to timeline</button>
      </div>
    )
  }
}

export default AddTimelineEntry;