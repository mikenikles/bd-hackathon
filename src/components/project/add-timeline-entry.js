import React from 'react'
import getRebase from '../../utils/rebase'
import moment from 'moment'
import AddAudioEntry from './add-audio-entry'
import AddPictureEntry from './add-picture-entry'

import audio from '../../assets/icons/audio.svg';
import audioactive from '../../assets/icons/audio-active.svg'; // eslint-disable-line
import camera from '../../assets/icons/camera.svg';
import cameraactive from '../../assets/icons/camera-active.svg'; // eslint-disable-line
import question from '../../assets/icons/question.svg';
import questionactive from '../../assets/icons/question-active.svg'; // eslint-disable-line
import video from '../../assets/icons/video.svg';
import videoactive from '../../assets/icons/video-active.svg'; // eslint-disable-line


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
  }

  onAddPictureEntry(picture) {
    console.log('addPictureEntry', picture)
    this.setState({
      pictureEntry: picture
    })
  }

  saveToTimeline() {
    const projects = this.state.projects
    const project = projects[this.props.params.id]
    if (!project.timeline) {
      project.timeline = []
    }

    // Initialize timeline entry
    const timelineEntry = {
      timestamp: Date.now(),
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
        <section className="u-padding-sides-lg">
        <h1>Add to timeline</h1>
        <p>Upload a picture, record your progress or ask a question here. When you&#39;re ready, tap the "Save to timeline" button.</p>
        <div className="timeline-entry-type u-display-flex u--space-between u--align-center">
          <a className="audio" onClick={() => this.setState({ timelineEntryType: 'audio' })}><img src={audio} alt="Audio" className="c-icon c--large"></img></a>
          <a className="video" onClick={() => this.setState({ timelineEntryType: 'video' })}><img src={video} alt="Video" className="c-icon c--large"></img></a>
          <a className="camera" onClick={() => this.setState({ timelineEntryType: 'image' })}><img src={camera} alt="Image" className="c-icon c--large"></img></a>
          <a className="question" onClick={() => this.setState({ timelineEntryType: 'question' })}><img src={question} alt="Question" className="c-icon c--large"></img></a>
        </div>
        <div className="c-steps u-padding-all-lg">
          { this.renderTimelineEntryType() }
        </div>
        <button onClick={this.saveToTimeline} className="c-button c--primary c--full-width">Save to timeline</button>
        </section>
      </div>
    )
  }
}

export default AddTimelineEntry;
