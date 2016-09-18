import React from 'react'

class AddPictureEntry extends React.Component {
  constructor(props) {
    super(props)

    this.takePicture = this.takePicture.bind(this)
  }

  componentDidMount() {
  }

  takePicture(e) {
    this.props.onAddEntry(e.target.files[0])
  }

  render() {
    return (
      <div>
        <p>
          <input onChange={this.takePicture} id="picture" type="file" accept="image/*;capture=camera" />
        </p>
      </div>
    )
  }
}

export default AddPictureEntry
