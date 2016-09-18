import React from 'react'

class AddPictureEntry extends React.Component {
  constructor(props) {
    super(props)

    this.takePicture = this.takePicture.bind(this)
  }

  componentDidMount() {
    // Get access to the camera!
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const video = this.refs.video
      // Not adding `{ audio: true }` since we only want video now
      navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      });
    }
  }

  takePicture() {
    const canvas = this.refs.canvas
    const context = canvas.getContext('2d')
    const video = this.refs.video
    context.drawImage(video, 0, 0, 640, 480)
  }

  render() {
    return (
      <div>
        <p>Add picture</p>
        <p>
          <video ref="video" width="640" height="480" autoPlay></video>
          <button ref="snap" onClick={this.takePicture}>Snap Photo</button>
          <canvas ref="canvas" width="640" height="480"></canvas>
        </p>
      </div>
    )
  }
}

export default AddPictureEntry