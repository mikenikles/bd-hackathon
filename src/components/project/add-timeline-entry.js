import React from 'react'
import getRebase from '../../utils/rebase'

class AddTimelineEntry extends React.Component {

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

  render () {
    if (this.state.projects.length === 0) {
      return false
    }

    const project = this.state.projects[this.props.location.query.id]

    return (
      <div>
        Log work here
      </div>
    )
  }
}

export default AddTimelineEntry;