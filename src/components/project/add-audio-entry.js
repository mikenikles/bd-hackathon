import React from 'react'
import SpeechRecognition from '../speech-recognition/speech-recognition'

class AddAudioEntry extends React.Component {
  render () {
    return (
      <div>
        <SpeechRecognition onEnd={this.props.onAddEntry} />
      </div>
    )
  }
}

export default AddAudioEntry